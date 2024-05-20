import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function EventDetailCard({month, day, eventName, dateTime}){
    return(
        <div className="flex flex-row">
            <div className="flex flex-col p-[1rem] bg-">
                <text className="font-bold">{month}</text>
                <text>{day}</text>
            </div>

            <div className="flex flex-col p-[1rem]">
                <text>{eventName}</text>
                <text>{dateTime}</text>
            </div>
        </div>
    );
}