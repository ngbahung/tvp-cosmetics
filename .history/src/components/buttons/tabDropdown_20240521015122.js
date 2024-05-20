import { Select, SelectItem } from "@nextui-org/react";

export default function TabDrop({ label, option1, option2 }) {
    return (
        <Select label={label} >
            <SelectItem>{option1}</SelectItem>
            <SelectItem>{option2}</SelectItem>
        </Select>
    )
}