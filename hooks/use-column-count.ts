import { useEffect, useState } from "react";

const BREAKPOINTS = [
  { minWidth: 1280, columns: 4 }, // xl
  { minWidth: 1024, columns: 3 }, // lg
  { minWidth: 640, columns: 2 },  // sm
  { minWidth: 0, columns: 1 },
];

export function useColumnCount() {
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      const match = BREAKPOINTS.find((bp) => w >= bp.minWidth);
      setColumns(match?.columns ?? 1);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return columns;
}
