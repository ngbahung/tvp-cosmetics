import NotiSummary from "@/components/cards/notiSummary";
import styles from "./interpage.module.css";

export default function internalAnnouncement() {
  return (
    <div className= {styles.pageContainer}>
      <NotiSummary />
    </div>
  );
}