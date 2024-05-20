import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ListLine({title, date, time}){
    return(
        <div className="flex p-2">
            <ChevronRight size={24} />
            <text> <Link className="font-bold text-lg">{title}</Link> - {date} - {time} </text>
        </div>
    );
}