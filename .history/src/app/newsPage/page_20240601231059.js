"use client"


import NotiSummary from "../../components/cards/notiSummary";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import AddAndEditButtons from "../../components/groupButtons/addAndEditButtons";
import getAllBanTin from "../../api/getAllBanTin";


export default function internalAnnouncement() {
  const [isEdit, setIsEdit] = useState(false);

  const bantin 

  

  return (
    <div className="px-[10rem] py-[3rem]">

      <AddAndEditButtons handleEdit={() => {
        setIsEdit((prev) => !prev);
      }} />


      <div className="flex flex-col gap-[3rem] ">
        {
          [...new Array(3)].map((_, index) => (
            <NotiSummary id={index} announcementTittle={"BẢN TIN"} postedDate={"T6, 12/04/2024 - 16:45"} content={"Nội dung bản tin"} type={'newsPage'} isEdit={isEdit} />
          ))
        }
      </div>

      <div className="flex justify-center pt-[3rem]">
        <Pagination total={10} initialPage={1} />
      </div>
    </div>


  );
}