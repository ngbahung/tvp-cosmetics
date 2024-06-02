import React from 'react'
import { DatePicker } from "@nextui-org/date-picker";
import getAllLichPhong from "../../api/getAllLichPhong";

export default async function RoomSchedule() {

  const lichphong = await 
  return (
    <div className="px-[10rem] py-[3rem]">

      <div className='w-full flex justify-end pb-4'>
        <div className=''>
          <DatePicker variant='bordered' color='black' />
        </div>
      </div>

      <div className='flex max-w-full overflow-x-auto h-fit items-stretch relative'>
        {/* Thời gian */}
        <div className='sticky left-0 z-10'>
          <div className={`min-w-[200px] bg-white flex flex-col shadow-lg items-center`}>
            <p className='font-bold w-full text-center pt-4 pb-8'>
              Thời gian
            </p>
            <ThoiGian isShowTime={true} />
          </div>
        </div>

        {/* Phòng */}
        {
          [{
            id: 1,
            name: 'Phòng 1',
            data: [{
              last: 75, //minute
              start: new Date(2024, 1, 1, 9, 0, 0),
              label: 'Họp ban nhân sự'
            },
            {
              last: 90, //minute
              start: new Date(2024, 1, 1, 7, 0, 0),
              label: 'Họp ban nhân sự'

            }]

          },
          {
            id: 2,
            name: 'Phòng 2',
            data: [{
              last: 120, //minute
              start: new Date(2024, 1, 1, 12, 0, 0),
              label: 'Họp ban nhân sự'

            },
            {
              last: 160, //minute
              start: new Date(2024, 1, 1, 15, 0, 0),
              label: 'Họp ban nhân sự'

            }]

          },
          {
            id: 3,
            name: 'Phòng 3',
            data: [{
              last: 120, //minute
              start: new Date(2024, 1, 1, 8, 0, 0),
              label: 'Họp ban nhân sự'

            }]

          },
          ...new Array(3)
          ].map((item, index) => (
            <div key={index} className='min-w-[200px] relative flex flex-col border-l  items-center'
            >
              <p className='font-bold w-full text-center pt-4 pb-8'>
                Phòng {index + 1}
              </p>
              <ThoiGian />

              <div className='absolute top-[90px] left-0 w-full h-[calc(100%-90px)]'>
                <div className='relative size-full' >
                  {
                    item?.data && item.data.map((item, index) => {
                      const top = (item.start.getHours() - 7) * 60 + item.start.getMinutes();
                      return (
                        <div className='absolute left-0 w-full bg-[#D9D9D9] p-1' style={{
                          top: top + 'px',
                          height: item.last + 'px',
                        }}>

                          <p className='w-full text-black font-bold text-sm'>{item.label}</p>
                        </div>)
                    })
                  }
                </div>
              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}


function ThoiGian({ isShowTime }) {
  return <div className='flex flex-col items-center w-full'>

    {
      [...new Array(12)].map((_, index, arr) => (
        <div key={index} className='w-full flex justify-center border-t border-[#00000060] relative'
          style={{
            backgroundColor: index == arr.length - 1 ? 'white' : index % 2 === 0 ? '#F7F6FE' : 'var(--primary-orange-100)',
            height: index == arr.length - 1 ? '32px' : '60px',
          }}
        >
          <p className='translate-y-[-16px] font-bold rounded-full w-fit h-fit bg-white border px-2 text-base' style={{
            opacity: isShowTime ? 1 : 0
          }}>
            {(index + 7).toString().padStart(2, '0')}:00
          </p>
        </div>
      ))
    }
  </div>
}

