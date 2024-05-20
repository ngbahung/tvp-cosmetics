import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function NotiSummary(content){
    return(
        <Card className="p-2">
            <CardHeader className="">
                <h4 className="font-extrabold text-xl text-[var(--primary-green-100)]">THÔNG BÁO</h4>
            </CardHeader>

            <CardBody className="gap-4">
                <text>{T6, 12/04/2024 - 16:45}</text>
                <text>{content}</text>
                <Button className="w-fit" radius="full" color="success">Xem chi tiết</Button>
            </CardBody>
            
        </Card>
    );
}