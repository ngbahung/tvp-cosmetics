import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ListLine({ title, date, time, href }) {
    return (
        <div className="flex p-2 items-center gap-2">
            <ChevronRight size={24} />
            <p> <Link className="font-bold text-lg" href={href} >{title}</Link> - {date} - {time} </p>
        </div>
    );
}