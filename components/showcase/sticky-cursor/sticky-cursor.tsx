"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styles from "./style.module.css";

interface StickyCursorProps {
  stickyElement: React.RefObject<HTMLDivElement | null>;
}

export default function StickyCursor({ stickyElement }: StickyCursorProps) {
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const cursorSize = isHovered ? 60 : 20; // Dynamically adjust for size
    const offset = cursorSize / 2; // Center the cursor
    const { clientX, clientY } = e;

    mouse.x.set(clientX - offset); // Adjust position for centering
    mouse.y.set(clientY - offset);
  };

  const manageMouseOver = () => {
    setIsHovered(true); // Trigger hover state
  };

  const manageMouseLeave = () => {
    setIsHovered(false); // Reset hover state
  };

  useEffect(() => {
    const stickyEl = stickyElement.current;

    window.addEventListener("mousemove", manageMouseMove);

    if (stickyEl) {
      stickyEl.addEventListener("mouseover", manageMouseOver);
      stickyEl.addEventListener("mouseleave", manageMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);

      if (stickyEl) {
        stickyEl.removeEventListener("mouseover", manageMouseOver);
        stickyEl.removeEventListener("mouseleave", manageMouseLeave);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stickyElement, isHovered]); // Add isHovered as a dependency

  return (
    <motion.div
      className={styles.cursor}
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate={{
        width: isHovered ? 60 : 20, // Adjust size when hovered
        height: isHovered ? 60 : 20,
        transition: { duration: 0.2 }, // Smooth transition effect
      }}
    ></motion.div>
  );
}
