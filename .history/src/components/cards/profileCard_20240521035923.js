import { Card } from "@nextui-org/react";
import Image from "next/image";

export default function ProfileCard({ imgSrc  }) {
    return (
        <Card>
            <Card.Body>
                <Image src={imgSrc}/>
            </Card.Body>
            <Card.Header>

            </Card.Header>
        </Card>
    );
}