import { ChevronRight } from "lucide-react";

export default function ListLine({title, date, time}){
    return(
        <div className="flex p-2">
            <ChevronRight size={24} />
            <text> <s className="font-bold text-lg">{title}</s> - {date} - {time} </text>
        </div>
    );
}