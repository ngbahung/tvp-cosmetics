import { ChevronRight } from "lucide-react";

export default function ListLine(){
    return(
        <div>
            <ChevronRight size={24} />
            <text>{title} - {}</text>
        </div>
    );
}