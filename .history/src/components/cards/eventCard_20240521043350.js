import { Card, CardBody, CardHeader } from "@nextui-org/react";
import EventDetailCard from "./eventDetailCard";

export default function EventCard(){
    return(
        <Card>
            <CardHeader className="flex justify-center">
                <h4 className="font-extrabold ">SỰ KIỆN</h4>
            </CardHeader>
            <CardBody >
                <EventDetailCard month={12} day={12} eventName={"ngủ"} dateTime={"14/2/2024 9:30"}/>
            </CardBody>
        </Card>
    );
}