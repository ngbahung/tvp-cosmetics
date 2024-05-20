import Image from "next/image";
import styles from "./page.module.css";
import ProfileCard from "@/components/cards/profileCard";
import 

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSide}>
        <ProfileCard imgSrc={}/>
      </div>

      <div className={styles.rightSide}>

      </div>
    </div>
  );
}
