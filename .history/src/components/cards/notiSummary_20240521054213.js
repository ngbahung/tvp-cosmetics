import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function NotiSummary(){
    return(
        <Card className="p-2">
            <CardHeader className="">
                <h4 className="font-extrabold text-xl text-[var(--primary-green-100)]">THÔNG BÁO</h4>
            </CardHeader>

            <CardBody className="gap-4">
                <text>T6, 12/04/2024 - 16:45</text>
                <text>Sự kiện tri ân khách hàng sẽ được tổ chức vào ngày 30/04/2024, mời tất cả nhân viên tham gia.</text>
                <Button className="w-3rem" color="success">Xem chi tiết</Button>
            </CardBody>
            
        </Card>
    );
}