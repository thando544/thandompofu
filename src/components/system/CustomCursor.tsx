import { useEffect, useState } from "react";

type CursorState = {
  x: number;
  y: number;
  active: boolean;
  visible: boolean;
};

export function CustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    active: false,
    visible: false,
  });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!canHover) {
      return;
    }

    function move(event: MouseEvent) {
      setCursor((current) => ({
        ...current,
        x: event.clientX,
        y: event.clientY,
        visible: true,
      }));
    }

    function leave() {
      setCursor((current) => ({ ...current, visible: false }));
    }

    function over(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, input, textarea, select, [role='button']",
      );
      setCursor((current) => ({ ...current, active: Boolean(interactive) }));
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", leave);
    document.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", leave);
      document.removeEventListener("mouseover", over);
    };
  }, []);

  if (!cursor.visible) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${cursor.active ? "custom-cursor-active" : ""}`}
      style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      aria-hidden="true"
    >
      <span className="custom-cursor-ring" />
      <span className="custom-cursor-dot" />
    </div>
  );
}
