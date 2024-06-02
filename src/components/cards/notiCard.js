import { Card, CardBody, CardHeader } from "@nextui-org/react";
import ListLine from "./listLine";

export default function NotiCard({ notiHeader, rows }) {
    return (
        <Card className="p-2 w-full">
            <CardHeader className="flex justify-center">
                <h4 className="font-extrabold text-2xl ">{notiHeader}</h4>
            </CardHeader>
            <CardBody>
                {
                    rows?.map((row, index) => {
                        const { date, time } = row;
                        return (
                            <ListLine key={index} title={row.title} date={date} time={time} href={row.href} />
                        );
                    })
                }
            </CardBody>
        </Card>
    );
}