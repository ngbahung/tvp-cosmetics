"use client"

import React from 'react'
import { Button, Card, CardBody, Textarea, } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { DateRangePicker } from "@nextui-org/date-picker";

import { Pagination } from "@nextui-org/react";


const RequestOff = () => {


  const typeOff = [
    {
      label: 'Nghỉ',
      value: 'off'
    },
    {
      label: 'Về sớm',
      value: 'som'
    }
  ]

  const requestHistory = [{
    nameTyoe: 'Nghỉ',
    date: '20/10/2021',
    status: 'pending',
  },
  {
    nameTyoe: 'Nghỉ',
    date: '20/10/2021',
    status: 'active',
  },
  {
    nameTyoe: 'Nghỉ',
    date: '20/10/2021',
    status: 'cancel',
  },
  ]


  return (
    <div className="px-[10rem] py-[3rem] flex items-start gap-[3rem]">
      <Card className="w-[60%] p-4">
        <CardBody className="flex w-full flex-col gap-4">
          <p className="text-2xl text-green font-extrabold">
            YÊU CẦU NGHỈ PHÉP
          </p>

          <Select
            items={typeOff}
            label="Chọn loại nghỉ phép"
            variant="bordered"

          >
            {typeOff.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>

          <DateRangePicker
            variant="bordered"
            label="Thời gian"
          />

          <Textarea
            label="Lý do"
            variant="bordered"
            placeholder="Nhập mô tả"
            minRows={9}
          />

          <div className='flex justify-center'>
            <Button radius="full" className="text-white bg-green font-bold text-2xl">Xác nhận</Button>
          </div>

        </CardBody>
      </Card>


      <Card className="flex-1 p-4">
        <CardBody className="flex w-full flex-col gap-4">
          <p className="text-2xl text-green font-extrabold uppercase">
            Lịch sử yêu cầu
          </p>

          {
            requestHistory.map((item, index) => (
              <div key={index} className="flex w-full px-4 py-2 bg-white flex-col gap-2 rounded-lg border border-[#00000020] overflow-hidden text-base">
                <p>
                  <span className='font-bold'>Tên loại nghỉ phép: </span>
                  {item.nameTyoe}</p>
                <p><span className='font-bold'>Thời gian:</span> {item.date}</p>
                <p><span className='font-bold'>Trạng thái:</span> <span className='italic' style={{
                  color: item.status === 'active' ? 'green' : item.status == 'pending' ? 'red' : 'gray'
                }}>{MapStatus(item.status)}</span></p>
              </div>
            ))
          }


          <div className="flex justify-center">
            <Pagination total={10} initialPage={1} />
          </div>

        </CardBody>
      </Card>
    </div>
  )
}

export default RequestOff

export function MapStatus(status) {

  switch (status) {
    case 'active':
      return 'Chờ duyệt'
    case 'pending':
      return 'Duyệt'
    default:
      return 'Không duyệt'
  }
}