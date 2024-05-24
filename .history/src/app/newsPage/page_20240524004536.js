import NotiSummary from "@/components/cards/notiSummary";
import styles from "./page.module.css";
import { Pagination } from "@nextui-org/react";

export default function internalAnnouncement() {
  return (
    <div>
        <div className= {styles.pageContainer}>
            <NotiSummary announcementTittle={"BẢN TIN"} postedDate={"Ngày đăng: 20/10/2021"} content={"Nội dung BẢN"} />
            <NotiSummary announcementTittle={"BẢN TIN"} postedDate={"Ngày đăng: 20/10/2021"} content={"Nội dung thông báo"} />
        </div>

        <div className="flex justify-center">
            <Pagination total={10} initialPage={1} />
        </div>
  </div>
    

  );
}