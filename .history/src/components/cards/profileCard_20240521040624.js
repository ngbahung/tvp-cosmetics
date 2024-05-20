import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export default function ProfileCard({ imgSrc  }) {
    return (
        <Card className="w-[22.5rem]">
            <CardBody>
                <Image src={imgSrc} alt="useProfile" className="object-cover rounded-xl" width={200} height={200}/>
            </CardBody>
            <CardHeader className="flex flex-col items-start">
                <h4 className="font-bold text-large">Frontend Radio</h4>
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
            </CardHeader>
        </Card>
    );
}