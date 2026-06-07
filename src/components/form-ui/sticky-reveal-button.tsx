import React, { useEffect, useRef, useState } from "react";

type Props = {
  stickyEl?: () => React.ReactNode;
};

export default function StickyReveal({ stickyEl }: Props) {
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
        <div className="p-4">{stickyEl?.()}</div>
      </div>

      <div ref={anchorRef}>
        <div className="p-4">{stickyEl?.()}</div>
      </div>
    </>
  );
}
