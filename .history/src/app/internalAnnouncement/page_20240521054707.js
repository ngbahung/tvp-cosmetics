import NotiSummary from "@/components/cards/notiSummary";
im
import styles from "./page.module.css";

export default function internalAnnouncement() {
  return (
    <div className= {styles.pageContainer}>
      <NotiSummary />
      <NotiSummary />
      <NotiSummary />
      <NotiSummary />
    </div>

    <div>
        <Pagination total={10} initialPage={1} />
    </div>
  );
}