import Image from "next/image";
import styles from "./page.module.css";
import ProfileCard from "@/components/cards/profileCard";
import Logo from "../images/Logo TVP Cosmetics.png";
import EventCard from "@/components/cards/eventCard";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.leftSide}>
        <ProfileCard imgSrc={Logo}/>
        <EventCard />
      </div>

      <div className={styles.rightSide}>
        

      </div>
    </div>
  );
}
