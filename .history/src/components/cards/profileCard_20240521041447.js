import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export default function ProfileCard({ imgSrc  }) {
    return (
        <Card className="w-[22.5rem] p-[1rem]">
            <CardBody className="flex justify-center items-center ">
                <Image src={imgSrc} alt="useProfile" className="object-cover rounded-xl " width={300} height={300}/>
            </CardBody>

            <CardHeader className="flex flex-col items-start gap-1">
                <h4 className="font-extrabold uppercase text-large">LÊ ĐOÀN TẤN TRÍ - NV001</h4>
                <text className="italic font-medium">haihi</text>
                <text className="uppercase font-medium">Daily Mix</text>
            </CardHeader>
        </Card>
    );
}