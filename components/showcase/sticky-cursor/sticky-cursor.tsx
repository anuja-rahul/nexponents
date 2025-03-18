import styles from "./style.module.css";

interface StickyCursorProps {
  children: React.ReactNode;
}

export default function StickyCursor({ children }: StickyCursorProps) {
  return (
    <div>
      <div className={styles.cursor}></div>
      {children}
    </div>
  );
}
