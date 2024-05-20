import { Card, CardBody, CardHeader } from "@nextui-org/react";
import ListLine from "./listLine";

export default function NotiCard({notiName, title, date, time}){
    return(
        <Card className="p-2">
            <CardHeader className="flex justify-center">
                <h4 className="font-extrabold text-2xl ">{notiName}</h4>
            </CardHeader>
            <CardBody>
                <ListLine title={title} date={date} time={time}/>
                <ListLine title={title} date={date} time={time}/>
                <ListLine title={title} date={date} time={time}/>
                <ListLine title={title} date={date} time={time}/>
            </CardBody>
        </Card>
    );
}