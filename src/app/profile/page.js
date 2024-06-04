// "use client"

import ProfileCard from '../../components/cards/profileCard'
// import React, { useState } from 'react'
import Logo from "../../assets/Logo TVP Cosmetics.png";
import { Button, Input } from '@nextui-org/react';
import { LockKeyhole } from 'lucide-react';
import PassWord from '../../components/input/passWord';
import getAllNhanVien from '../../api/getAllNhanVien';
import getAllPhongBan from '../../api/getAllPhongBan';

export default async function Profile() {

  // const [isChangePassword, setIsChangePassword] = useState(false)

  const nhanvien = await getAllNhanVien();
  const phongban = await getAllPhongBan();

  const joinedData3 = nhanvien.map((nv) => {
    const pb = phongban.find((pb) => pb.id === nv.PhongBan_id);
    return {
      ...nv,
      ...pb
    }
  }
  );


  console.log(joinedData3);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };


  return (
    <div className="px-[10rem] py-[3rem] flex items-start gap-[3rem]">

      <ProfileCard isUpdate={true} imgSrc={Logo} hideInfor={true} />

      <div className='flex-1 flex flex-col gap-4'>

        <div className='flex items-center gap-4'>
          <Input size='lg' label="Tên đăng nhập" defaultValue={joinedData3[0].HoTen} variant='bordered' className="w-[70%]" isReadOnly/>
          <Input size='lg' label="Mã nhân viên" defaultValue={joinedData3[0].id} variant='bordered' className="flex-1" isReadOnly/>
        </div>

        <div className='flex items-center gap-4'>
          <Input size='lg' label="Chức vụ" defaultValue={joinedData3[0].ChucVu} variant='bordered' className="w-[40%]" isReadOnly/>
          <Input size='lg' label="Phòng ban" defaultValue={joinedData3[0].TenPhong} variant='bordered' className="flex-1" isReadOnly/>
        </div>

        <div className='flex items-center gap-4'>
          <Input size='lg' label="CCCD" defaultValue={joinedData3[0].CCCD} variant='bordered' className="w-[70%]" isReadOnly/>
          <Input size='lg' label="Ngày sinh" defaultValue={formatDate(joinedData3[0].NgaySinh)} variant='bordered' className="flex-1" isReadOnly/>
        </div>

        <div className='flex items-center gap-4'>
          <Input size='lg' label="Số điện thoại" defaultValue={joinedData3[0].SDT} variant='bordered' className="flex-1" />
        </div>

        <div className='flex items-center flex-col gap-2'>
          <Button radius='full' className='text-white bg-green font-bold'>Cập nhật</Button>

          {/* <button className='flex items-center gap-2' onClick={() => setIsChangePassword(true)}>
            <LockKeyhole />
            <span>Đổi mật khẩu</span>
          </button> */}
        </div>


        {/* {
          isChangePassword && (
            <div className='flex flex-col gap-4'>

              <PassWord size='lg' label="Mật khẩu cũ" className="w-[40%]" />

              <div className='flex w-full items-center gap-4'>
                <PassWord size='lg' label="Mật khẩu mới" className="w-[40%]" />
                <PassWord size='lg' label="Xác nhận mật khẩu mới" className="w-[40%]" />

                <div className='flex-1 flex justify-end'>
                  <Button size='md' radius='full' className='text-white bg-green font-bold'>Lưu</Button>
                </div>
              </div>
            </div>
          )
        } */}

      </div>

    </div>
  )
}