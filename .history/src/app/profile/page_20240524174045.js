"use client"

import ProfileCard from '../../components/cards/profileCard'
import React, { useState } from 'react'
import Logo from "../../assets/Logo TVP Cosmetics.png";
import { Button, Input } from '@nextui-org/react';
import { LockKeyhole } from 'lucide-react';
import PassWord from '../../components/input/passWord';

const Profile = () => {

  const [isChangePassword, setIsChangePassword] = useState(false)

  return (
    <div className="px-[10rem] py-[3rem] flex items-start gap-[3rem]">

      <ProfileCard isUpdate={true} imgSrc={Logo} hideInfor={true} />

      <div className='flex-1 flex flex-col gap-4'>

        <div className='flex items-center gap-4'>
          <Input size='lg' label="Tên đăng nhập" variant='bordered' className="w-[70%]" />
          <Input size='lg' label="Mã nhân viên" variant='bordered' className="flex-1" />
        </div>

        <div className='flex items-center gap-4'>
          <Input size='lg' label="Chức vụ" variant='bordered' className="w-[40%]" />
          <Input size='lg' label="Phòng ban" variant='bordered' className="flex-1" />
        </div>

        <div className='flex items-center gap-4'>
          <Input size='lg' label="CCCD" variant='bordered' className="w-[70%]" />
          <Input size='lg' label="Ngày sinh" variant='bordered' className="flex-1" />
        </div>

        <div className='flex items-center gap-4'>
          <Input size='lg' label="Số điện thoại" variant='bordered' className="flex-1" />
        </div>

        <div className='flex items-center flex-col gap-2'>
          <Button radius='full' className='text-white bg-green font-bold'>Cập nhật</Button>

          <button className='flex items-center gap-2' onClick={() => setIsChangePassword(true)}>
            <LockKeyhole />
            <span>Đổi mật khẩu</span>
          </button>
        </div>


        {
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
        }

      </div>

    </div>
  )
}

export default Profile