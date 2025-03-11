import { motion } from "framer-motion";
import styles from "./style.module.scss";
import clsx from "clsx";
import { JSX } from "react";
import { MenuIcon, XIcon } from "lucide-react";

interface ButtonProps {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

export default function Button({ isActive, setIsActive }: ButtonProps) {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={clsx(
        styles.button
        // "border-2 border-blue-900"
      )}
    >
      <motion.div
        className={styles.slider}
        animate={{
          top: isActive ? "-100%" : "0",
        }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div className={styles.el}>
          <PerspectiveText label={<MenuIcon />} />
        </div>
        <div className={styles.el}>
          <PerspectiveText label={<XIcon />} />
        </div>
      </motion.div>
    </div>
  );
}

type PerspectiveTextProps = {
  label: string | JSX.Element;
};

export function PerspectiveText({ label }: PerspectiveTextProps) {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
