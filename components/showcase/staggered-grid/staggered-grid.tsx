"use client";

import clsx from "clsx";
import anime from "animejs";

interface StaggeredGridProps {
  className?: string;
  gridWidth?: number;
  gridHeight?: number;
  amplitude?: number;
}

interface StaggeredDotProps {
  gridWidth: number;
  gridHeight: number;
  amplitude: number;
}
const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;
const AMPLITUDE = -15;

export default function StaggeredGrid({
  className,
  gridHeight = GRID_HEIGHT,
  gridWidth = GRID_WIDTH,
  amplitude = AMPLITUDE,
}: StaggeredGridProps) {
  return (
    <div
      className={clsx(
        "relative grid h-full w-full place-content-center px-4 bg-transparent",
        className
      )}
    >
      <DotGrid
        gridHeight={gridHeight}
        gridWidth={gridWidth}
        amplitude={amplitude}
      />
    </div>
  );
}

const DotGrid = ({ gridWidth, gridHeight, amplitude }: StaggeredDotProps) => {
  const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const index = Number(e.currentTarget.dataset.index);
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: amplitude, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [gridWidth, gridHeight],
        from: isNaN(index) ? undefined : index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700
          to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};
