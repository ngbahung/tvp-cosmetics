import { Select, SelectItem } from "@nextui-org/react";

export default function TabSelect({ children }) {
    return (
        <Select>
            <SelectItem>{children}</SelectItem>
            
        </Select>
    )
}