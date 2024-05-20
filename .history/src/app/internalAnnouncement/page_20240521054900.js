import NotiSummary from "@/components/cards/notiSummary";

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

        <div>
            <Pag total={10} initialPage={1} />
        </div>
  </div>
    

  );
}