import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function NotiSummary(postedDate, content){
    return(
        <Card className="p-2">
            <CardHeader className="">
                <h4 className="font-extrabold text-xl text-[var(--primary-green-100)]">{announcementTittle}</h4>
            </CardHeader>

            <CardBody className="gap-4">
                <text>{postedDate}</text>
                <text>{content}</text>
                <Button className="w-fit" radius="full" color="success">Xem chi tiết</Button>
            </CardBody>
            
        </Card>
    );
}