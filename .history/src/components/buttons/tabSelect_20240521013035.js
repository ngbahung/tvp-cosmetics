import { Select, SelectItem } from "@nextui-org/react";

export default function TabSelect({ label, option1, option2 }) {
    return (
        <Select label={label} className="w-full">
            <SelectItem>{option1}</SelectItem>
            <SelectItem>{option2}</SelectItem>
        </Select>
    )
}