import NotiSummary from "@/components/cards/notiSummary";
import styles from "./internalpage.module.css";

export default function internalAnnouncement() {
  return (
    <div className= {styles.pageContainer}>
      <NotiSummary />
    </div>
  );
}