"use client"

import NotiSummary from "../../components/cards/notiSummary";
import { Button, Pagination } from "@nextui-org/react";
import AddAndEditButtons from "../../components/groupButtons/addAndEditButtons";
import { useEffect, useState } from "react";
import getAllThongBao from "../../api/getAllThongBao";


export default function internalAnnouncement() {

  const [isEdit, setIsEdit] = useState(false);

  // const [data, setData] = useState(null)
  // const [isLoading, setLoading] = useState(true)


  // useEffect(() => {
  //   fetch('http://localhost:8080/ThongBao/list')
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setData(data.result); // Assuming data.result contains the desired data
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Fetch error:', error);
  //       setLoading(false);
  //     });
  // }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  // if (!data) {
  //   return <div>Not found</div>
  // }

  return (
    <div className="px-[10rem] py-[3rem]">

      <AddAndEditButtons handleEdit={() => {
        setIsEdit((prev) => !prev);
      }} />

      <div className="flex flex-col gap-[3rem]">
        {
          [...new Array(3)].map((_, index) => (
            <NotiSummary id={index} announcementTittle={"THÔNG BÁO"} postedDate={"T6, 12/04/2024 - 16:45"} content={"Nội dung bản tin"} type={'internalAnnouncement'} isEdit={isEdit} />
          ))
        }
      </div>

      <div className="flex justify-center pt-[3rem]">
        <Pagination total={10} initialPage={1} />
      </div>
    </div>


  );
}