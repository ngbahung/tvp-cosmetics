import { ChevronRight } from "lucide-react";

export default function ListLine({title, date, time}){
    return(
        <div>
            <ChevronRight size={24} />
            <text> <span className="font-bold text-">{title}</span> - {date} - {time} </text>
        </div>
    );
}