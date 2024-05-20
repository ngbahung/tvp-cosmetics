import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function EventDetailCard({month, day, eventName, dateTime}){
    return(
        <div className="flex flex-row">
            <div className="">
                <text className="font-bold">{month}</text>
                <text>{day}</text>
            </div>

            <div>
                <text>{eventName}</text>
                <text>{dateTime}</text>
            </div>
        </div>
    );
}