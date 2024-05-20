import { Card } from "@nextui-org/react";
import Image from "next/image";

export default function ProfileCard({ imgSrc  }) {
    return (
        <Card>
            <Card.Body>
                <Image src={imgSrc} alt="useProfile" className="object-cover rounded-xl"/>
            </Card.Body>
            <Card.Header>
                <h4 className="font-bold text-large">Frontend Radio</h4>
            </Card.Header>
        </Card>
    );
}