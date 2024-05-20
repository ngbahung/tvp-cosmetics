import { Card, CardBody, CardHeader } from "@nextui-org/react";

export default function NotiCard(){
    return(
        <Card>
            <CardHeader className="flex justify-center">
                <h4 className="font-extrabold text-2xl ">THÔNG BÁO</h4>
            </CardHeader>
        </Card>
    );
}