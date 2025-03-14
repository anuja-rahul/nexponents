"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

interface MagneticLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function MagneticLinks({
  children,
  href,
  className,
}: MagneticLinkProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = element.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      className={className}
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Link href={href} className="w-full h-full">{children}</Link>
    </motion.div>
  );
}
