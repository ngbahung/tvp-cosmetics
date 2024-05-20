import { Card, CardBody, Card } from "@nextui-org/react";
import Image from "next/image";

export default function ProfileCard({ imgSrc  }) {
    return (
        <Card>
            <CardBody>
                <Image src={imgSrc} alt="useProfile" className="object-cover rounded-xl"/>
            </CardBody>
            <CardHeader>
                <h4 className="font-bold text-large">Frontend Radio</h4>
                <p className="text-tiny uppercase font-bold">Daily Mix</p>
            </CardHeader>
        </Card>
    );
}