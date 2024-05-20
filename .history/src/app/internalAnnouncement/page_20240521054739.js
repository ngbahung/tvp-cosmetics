import NotiSummary from "@/components/cards/notiSummary";
import Pagination from "@/components/pagination";
import styles from "./page.module.css";

export default function internalAnnouncement() {
  return (
    <div>
        <div className= {styles.pageContainer}>
    <NotiSummary />
    <NotiSummary />
    <NotiSummary />
    <NotiSummary />
        </div>
  </div>
    

  );
}