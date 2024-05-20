import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function EventDetailCard(){
    return(
        <Card>
            <div>
                <text>{month}</text>
                <text>{day}</text>
            </div>
        </Card>
    );
}