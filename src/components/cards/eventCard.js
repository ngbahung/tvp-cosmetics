import { Card, CardBody, CardHeader } from "@nextui-org/react";
import EventDetailCard from "./eventDetailCard";

export default function EventCard({month1, day1, eventName1, dateTime1, month2, day2, eventName2, dateTime2}){


    return(
        <Card className="p-2">
            <CardHeader className="flex justify-center">
                <h4 className="font-extrabold text-2xl ">SỰ KIỆN</h4>
            </CardHeader>
            <CardBody className="gap-4">
                <EventDetailCard month={month1} day={day1} eventName={eventName1} dateTime={dateTime1}/>
                <EventDetailCard month={month2} day={day2} eventName={eventName2} dateTime={dateTime2}/>
            </CardBody>
        </Card>
    );
}