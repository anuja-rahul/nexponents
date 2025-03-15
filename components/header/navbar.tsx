"use client";
import { useState } from "react";
import Button from "./button/button";
import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import NavItems from "./nav-items/nav-items";
import clsx from "clsx";

const variants = {
  open: {
    width: 480,
    height: 650,
    top: "-15px",
    right: "-15px",
    transition: {
      duration: 0.5,
      ease: [0.75, 0, 0.24, 1],
    },
  },
  closed: {
    width: 60,
    height: 30,
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      ease: [0.75, 0, 0.24, 1],
    },
  },
};

interface NavBarProps {
  className?: string;
}

export default function Navbar({ className }: NavBarProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={clsx(
        styles.header,
        "absolute top-[25px] right-[25px] z-[9999]",
        className
      )}
    >
      <motion.div
        variants={variants}
        animate={isActive ? "open" : "closed"}
        className={styles.menu}
        initial="closed"
      >
        <AnimatePresence>{isActive && <NavItems />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
