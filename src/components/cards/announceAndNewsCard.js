"use client"
import ListLine from "../../components/cards/listLine";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from 'react';

const AnnounceAndNewsCard = () => {
  const [data, setData] = React.useState({
    header: 'Thông báo nghỉ lễ ngày Chiến thắng 30/4 và Quốc tế Lao động 01/5 năm 2024',
    date: 'T4, 17/04/2024 - 15:47',
    content: `Kính gửi: Toàn thể cán bộ, nhân viên công ty TVP Cosmetics <br>Căn cứ theo Quy định của Bộ luật Lao động 2019 về chế độ nghỉ lễ, tết.<br>Thời gian nghỉ: 5 ngày (27/04/2024 - 01/05/2024)<br> Quay lại làm việc: Thứ Tư, ngày 02/05/2024.<br>Trân trọng.<br>----<br>TBN`,
    files: [],
    relative: [...new Array(2)].
      map((_, index) => (
        {
          title: `Tiêu đề ${index + 1}`,
          date: "25/04/2024",
          time: "8:00",
          href: "/"
        }
      ))
  })
  return (
    <div className="px-[10rem] py-[3rem]">
      <Card className="p-2">
        <CardHeader className="">
          <h4 className="font-extrabold text-xl text-green">{data.header}</h4>
        </CardHeader>

        <CardBody>
          <div className='flex flex-col justify-start gap-3'>
            <p className="italic">{data.date}</p>
            <p dangerouslySetInnerHTML={{ __html: data.content }} />

            <p>
              <span>File đính kèm: </span>
              {data.files && data.files.length > 0 ?
                data.files.map((file, index) => (
                  <a href={file.href} key={index}>
                    {file.title}
                  </a>
                )) : (
                  <span>Không có</span>
                )
              }
            </p>


            <div className='flex flex-col pt-[50px]'>
              <p className='text-xl font-extrabold text-black'>Bài viết liên quan</p>
              {
                data.relative && data.relative.length > 0 ?
                  data.relative.map((row, index) => (
                    <ListLine key={index} {...row} />
                  )) : (
                    <span>Không có</span>
                  )
              }

            </div>
          </div>
        </CardBody>

      </Card>
    </div>
  )
}

export default AnnounceAndNewsCard