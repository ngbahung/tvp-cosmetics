
"use client"
import React from 'react'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import { CircleCheck } from 'lucide-react';
import { CircleX } from 'lucide-react';

import { Pagination } from "@nextui-org/react";

const ApproveRequest = () => {

  const rows = [...new Array(10).fill({
    stt: 1,
    requestDate: new Date(2024, 1, 1, 9, 0, 0),
    id: 1,
    name: "Hưng",
    type: "Nghỉ ốm",
    time: {
      start: new Date(2024, 1, 1, 9, 0, 0),
      end: new Date(2024, 1, 1, 11, 0, 0),
    },
    reason: 'Trào ngươc dạ dày',
  })
  ]
  console.log(rows);
  return (
    <div className="px-[10rem] py-[3rem] flex flex-col gap-4">
      <p className="text-2xl text-green font-extrabold text-center">
        DUYỆT NGHỈ PHÉP
      </p>

      <Table isStriped removeWrapper isHeaderSticky >
        <TableHeader className=''>
          <TableColumn>STT</TableColumn>
          <TableColumn>Thời gian YC</TableColumn>
          <TableColumn>Mã NV</TableColumn>
          <TableColumn>Họ tên</TableColumn>
          <TableColumn>Loại nghỉ</TableColumn>
          <TableColumn>Khoảng nghỉ</TableColumn>
          <TableColumn>Lý do</TableColumn>
          <TableColumn>Duyệt</TableColumn>
        </TableHeader>
        <TableBody>
          {
            rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.stt}</TableCell>
                <TableCell>{row.requestDate.toLocaleDateString()}</TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.time.start.toLocaleDateString()} - {row.time.end.toLocaleDateString()}</TableCell>
                <TableCell>{row.reason}</TableCell>
                <TableCell>
                  <div className='w-full gap-2 flex items-center'>
                    <button>
                      <CircleCheck size={32} color='green' />
                    </button>

                    <button>
                      <CircleX size={32} color='red' />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }

        </TableBody>
      </Table>

      <div className="flex justify-center">
        <Pagination total={10} initialPage={1} />
      </div>
    </div>

  )
}

export default ApproveRequest