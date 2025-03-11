"use client";
import { useState } from "react";
import Button from "./button/button";
import styles from "./style.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import NavItems from "./nav-items/nav-items";

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

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${styles.header} md:hidden`}>
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
