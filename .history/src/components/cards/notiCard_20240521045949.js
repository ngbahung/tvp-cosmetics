import { Card, CardBody, CardHeader } from "@nextui-org/react";
import ListLine from "./listLine";

export default function NotiCard(){
    return(
        <Card>
            <CardHeader className="flex justify-center">
                <h4 className="font-extrabold text-2xl ">THÔNG BÁO</h4>
            </CardHeader>
            <CardBody>
                <ListLine title={"Đi học"} date={"12/2/2024"} time={"9:30"}/>
            </CardBody>
        </Card>
    );
}