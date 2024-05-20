import { ChevronRight } from "lucide-react";

export default function ListLine({title, date, time}){
    return(
        <div>
            <ChevronRight size={24} />
            <text>{title} - {date} - {time} </text>
        </div>
    );
}