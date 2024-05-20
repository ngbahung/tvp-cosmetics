import { ChevronRight } from "lucide-react";

export default function ListLine(){
    return(
        <div>
            <ChevronRight size={24} />
            <text>Tiêu đề 1</text> - <text>Ngày 1</text>
        </div>
    );
}