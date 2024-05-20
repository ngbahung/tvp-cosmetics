import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export default function ProfileCard({ imgSrc, name, staffId, position, department  }) {
    return (
        <Card className="w-[22.5rem] p-[1rem]">
            <CardBody className="flex justify-center items-center ">
                <Image src={imgSrc} alt="useProfile" className="object-cover rounded-xl " width={300} height={300}/>
            </CardBody>

            <CardHeader className="flex flex-col items-start gap-1">
                <h4 className="font-extrabold uppercase text-large">{name} - {staffId}</h4>
                <text className="italic font-medium">{position}</text>
                <text className="uppercase font-medium">{department}</text>
            </CardHeader>
        </Card>
    );
}