"use client";
import { useState } from "react";
import Button from "./button/button";
import styles from "./style.module.scss";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
