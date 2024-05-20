import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function EventDetailCard({month, day, eventName, dateTime}){
    return(
        <div className="flex flex-row px-3">
            <div className="flex flex-col p-[1rem] bg-[var(--primary-green-100)] w-1/4 items-center text-white text-large font-bold rounded-sm">
                <text>{month}</text>
                <text>{day}</text>
            </div>

            <div className="flex flex-col p-[1rem] border border-[var(--primary-green-100)] w-full rounded-lg">
                <text className="font-bold">{eventName}</text>
                <text>{dateTime}</text>
            </div>
        </div>
    );
}