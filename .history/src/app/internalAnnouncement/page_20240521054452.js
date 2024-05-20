import NotiSummary from "@/components/cards/notiSummary";
import styles from "./page.module.css";

export default function internalAnnouncement() {
  return (
    <div className= {styles.pageContainer}>
      <NotiSummary />
      
    </div>
  );
}