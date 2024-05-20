import NotiSummary from "@/components/cards/notiSummary";
import styles from "./page.module.css";
import { Pagination } from "@nextui-org/react";

export default function internalAnnouncement() {
  return (
    <div>
        <div className= {styles.pageContainer}>
            <NotiSummary />
            <NotiSummary />
            <NotiSummary />
            <NotiSummary />
        </div>

        <div >
            <Pagination total={10} initialPage={1} />
        </div>
  </div>
    

  );
}