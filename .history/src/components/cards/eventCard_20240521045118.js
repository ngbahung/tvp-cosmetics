import { Card, CardBody, CardHeader } from "@nextui-org/react";
import EventDetailCard from "./eventDetailCard";

export default function EventCard(){
    return(
        <Card className="p-2">
            <CardHeader className="flex justify-center">
                <h4 className="font-extrabold te ">SỰ KIỆN</h4>
            </CardHeader>
            <CardBody className="gap-4">
                <EventDetailCard month="SEP" day={12} eventName={"ngủ"} dateTime={"14/2/2024 9:30"}/>
                <EventDetailCard month="SEP" day={12} eventName={"ngủ"} dateTime={"14/2/2024 9:30"}/>
            </CardBody>
        </Card>
    );
}