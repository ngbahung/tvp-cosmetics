import NotiSummary from "@/components/cards/notiSummary";
import styles from "./internalAnnouncement/page.module.css";

export default function internalAnnouncement() {
  return (
    <div className= {styles.pageContainer}>
      <NotiSummary />
    </div>
  );
}