import { motion } from "framer-motion";
import { navLinks } from "./nav-data";
import styles from "./style.module.scss";
import Link from "next/link";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      opacity: { duration: 0.35, delay: i * 0.1 + 0.5 },
      delay: i * 0.1 + 0.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function NavItems() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {navLinks.map((link, i) => {
          return (
            <div key={i} className={styles.linkContainer}>
              <motion.div
                variants={perspective}
                custom={i}
                animate="enter"
                exit="exit"
                initial="initial"
              >
                <Link className={styles.link} href={link.href}>
                  {link.title}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
