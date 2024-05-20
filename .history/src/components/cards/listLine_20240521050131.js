import { ChevronRight } from "lucide-react";

export default function ListLine({title, date, time}){
    return(
        <div className="flex p-4">
            <ChevronRight size={24} />
            <text> <span className="font-bold text-lg">{title}</span> - {date} - {time} </text>
        </div>
    );
}