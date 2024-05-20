import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function EventDetailCard(month){
    return(
        <Card>
            <div>
                <text className="font-bold">{month}</text>
                <text>{day}</text>
            </div>

            <div>
                <text>{eventName}</text>
                <text>{dateTime}</text>
            </div>
        </Card>
    );
}