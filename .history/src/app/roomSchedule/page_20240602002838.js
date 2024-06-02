import React from 'react'
import { DatePicker } from "@nextui-org/date-picker";
import getAllLichPhong from "../../api/getAllLichPhong";
import getAllPhong from "../../api/getAllPhong";

export default async function RoomSchedule() {
  const phong = await getAllPhong();
  const phongResult = phong.result;
  // console.log(phongResult);

  const lichphong = await getAllLichPhong();
  const lichphongResult = lichphong.result;
  console.log(lichphongResult);

  function getHour(hour) {
    const h = hour.split(':')[0];
    return Number(h);
  }

  function getMinute(minute) {
    const m = minute.split(':')[1];
    return Number(m);
  }

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

        {phongResult.map((p) => (
            <div key={p.id} className='min-w-[200px] relative flex flex-col border-l  items-center'
            >
              <p className='font-bold w-full text-center pt-4 pb-8'>
                Phòng {p.id}
              </p>
              <ThoiGian />

              <div className='absolute top-[90px] left-0 w-full h-[calc(100%-90px)]'>
                <div className='relative size-full' >
                  {
                    lichphongResult.map((lp) => {

                      const top = (getHour(lp.GioBatDau) - 7) * 60 + getMinute(lp.GioBatDau);
                      return (
                        <div key={lp.id} className='absolute left-0 w-full bg-[#D9D9D9] p-1' style={{
                          top: top + 'px',
                          height: 120 + 'px',
                        }}>

                          <p className='w-full text-black font-bold text-sm'>{lp.TieuDe}</p>
                          <br />
                          <p className='w-full text-black font-bold text-sm'>{getHour(lp.GioBatDau)}</p>
                          <br />
                          <p className='w-full text-black font-bold text-sm'>{getHour(lp.GioKetThuc)}</p>

                          <p className='w-full text-black font-bold text-sm'>{lp.ThoiGian}</p>
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

