import Image from "next/image";
import styles from "./page.module.css";
import ProfileCard from "@/components/cards/profileCard";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSide}>
        <ProfileCard imgSrc="/src/images/Logo TVP Cosmetics.png" />
      </div>

      <div className={styles.rightSide}>

      </div>
    </div>
  );
}