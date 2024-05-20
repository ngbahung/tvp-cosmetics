import { ChevronRight } from "lucide-react";

export default function ListLine({title, date, time}){
    return(
        <div className="flex p-2">
            <ChevronRight size={24} />
            <text> <link className="font-bold text-lg">{title}</> - {date} - {time} </text>
        </div>
    );
}