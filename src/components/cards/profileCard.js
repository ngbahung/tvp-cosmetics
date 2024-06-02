"use client"
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { ImageUp } from 'lucide-react';
import { useState } from "react";

export default function ProfileCard({ imgSrc, hideInfor, isUpdate, name, staffId, position, department }) {

    const [avatar, setAvatar] = useState(imgSrc);

    return (
        <Card className="w-[22.5rem] p-4">
            <CardBody className="flex justify-center items-center relative overflow-hidden">
                <div className="w-full aspect-square">
                    <Image src={avatar} alt="useProfile" className="object-cover rounded-xl " fill />
                </div>
            </CardBody>
            {
                isUpdate &&
                <label className="absolute opacity-0 hover:opacity-100 transition-all duration-300 bg-[#D9D9D9] bg-opacity-40 cursor-pointer inset-0 size-full flex justify-center items-center">
                    <p className="w-8 h-8 rounded-full bg-white pointer-events-none flex justify-center items-center">
                        <ImageUp />
                    </p>
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))} />
                </label>
            }

            {
                !hideInfor &&
                <CardHeader className="flex flex-col items-start gap-1">
                    <h4 className="font-extrabold uppercase text-large">{name} - {staffId}</h4>
                    <text className="italic font-medium">{position}</text>
                    <text className="uppercase font-medium">{department}</text>
                </CardHeader>
            }
        </Card>
    );
}