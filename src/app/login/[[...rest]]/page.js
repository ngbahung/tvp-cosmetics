'use client'
import React from 'react'
import { Button, Card, CardBody, Input, Textarea, } from "@nextui-org/react";

import PassWord from '../../../components/input/passWord';
import Image from 'next/image';

import Logo from "../../../assets/Logo TVP Cosmetics.png";
import { SignIn, useUser } from "@clerk/nextjs";



const Login = () => {
  const { user } = useUser();
  
  return (
    <div className='w-[100vw] h-[100vh] bg-[#FFFFFF] flex items-center justify-center relative'>
      <div className='absolute h-fit top-0 left-1/2 -translate-x-1/2 w-fit gap-4 flex items-center py-2'>
        <div className='w-[120px] aspect-square relative'>
          <Image src={Logo} alt="useProfile" className="object-cover" fill />
        </div>
        <p className='flex-1 text-center text-black font-bold text-2xl'>CÔNG TY TNHH TVP COSMETICS</p>
      </div>

      {/* <Card className="z-10 w-[860px] px-4 py-8">
        <CardBody className="flex w-full flex-col gap-6">
          <p className="text-2xl text-center text-green font-extrabold">
            Đăng nhập
          </p>

          <Input label="Tên đăng nhập" variant="bordered" />
          <PassWord label="Mật khẩu" variant="bordered" />

          <div className='flex justify-center'>
            <Button radius="full" className="text-white w-full bg-green font-bold text-2xl">Đăng nhập</Button>
          </div>

        </CardBody>
      </Card> */}
{
  !user && (
    <SignIn />
  
  )
}
      
    </div>
    
  )
}

export default Login