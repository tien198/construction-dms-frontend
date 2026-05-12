import { PlusIcon } from "lucide-react";

type Props = {
  onClick: () => void;
  label?: string;
};

export function FloatingAddButton({
  onClick,
  label = "Thêm công trình",
}: Props) {
  const chars = label.split("");

  return (
    <div className="fixed bottom-10 right-20 z-50 flex items-center gap-3 group">
      {/* Staggered character label */}
      <div className="flex items-center text-sm font-bold text-accent-foreground px-2.5 py-4 shadow-md pointer-events-none ">
        {chars.map((char, i) => (
          <span
            key={i}
            className="inline-block opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-out text-accent text-lg backdrop-blur-sm py-2"
            style={{
              transitionDelay: `${i * 30}ms`,
              whiteSpace: char === " " ? "pre" : undefined,
            }}
          >
            {char === " " ? "\u00a0" : char}
          </span>
        ))}
      </div>

      {/* FAB button */}
      <button
        onClick={onClick}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-accent/40 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label={label}
      >
        <PlusIcon size={26} strokeWidth={2.5} />
      </button>
    </div>
  );
}
