import Image from "next/image";
import styles from "./page.module.css";
import ProfileCard from "@/components/cards/profileCard";
import Logo from "../images/Logo TVP Cosmetics.png";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSide}>
        <ProfileCard imgSrc={Logo}/>
        <eventCard>
      </div>

      <div className={styles.rightSide}>

      </div>
    </div>
  );
}
