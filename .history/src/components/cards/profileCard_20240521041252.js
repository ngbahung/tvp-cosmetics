import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export default function ProfileCard({ imgSrc  }) {
    return (
        <Card className="w-[22.5rem] p-[1rem]">
            <CardBody className="flex jus">
                <Image src={imgSrc} alt="useProfile" className="object-cover rounded-xl" width={200} height={200}/>
            </CardBody>

            <CardHeader className="flex flex-col items-start gap-1">
                <h4 className="font-extrabold uppercase text-large">Frontend Radio</h4>
                <text className="italic font-medium">haihi</text>
                <text className="uppercase font-medium">Daily Mix</text>
            </CardHeader>
        </Card>
    );
}