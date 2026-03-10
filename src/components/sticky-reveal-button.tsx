import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

type StickyRevealButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function StickyRevealButton({
  onClick,
  children,
}: StickyRevealButtonProps) {
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const [showFixedButton, setShowFixedButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = anchorRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();

      // Khi đáy của button gốc đi lên khỏi top viewport
      // => nghĩa là đã cuộn qua hết button
      setShowFixedButton(rect.bottom < 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={[
          "fixed right-6 z-50 transition-all duration-500",
          showFixedButton ? "top-1 opacity-100" : "-top-20 opacity-0",
        ].join(" ")}
      >
        <Button onClick={onClick} className="p-4 self-start sm:self-auto">
          {children}
        </Button>
      </div>

      <div ref={anchorRef}>
        <Button onClick={onClick} className="p-4 self-start sm:self-auto">
          {children}
        </Button>
      </div>
    </>
  );
}
