import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function EventDetailCard({month, day, eventName, dateTime}){
    return(
        <div className="flex flex-row p-1">
            <div className="flex flex-col p-[1rem] bg-[var(--primary-green-100)] w-1/4 items-center text-white text-large font-bold">
                <text>{month}</text>
                <text>{day}</text>
            </div>

            <div className="flex flex-col p-[1rem] border border-[var(--primary-green-100)] w-full">
                <text className="font-bold">{eventName}</text>
                <text>{dateTime}</text>
            </div>
        </div>
    );
}