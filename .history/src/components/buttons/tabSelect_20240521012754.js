import { Select, SelectItem } from "@nextui-org/react";

export default function TabSelect({ label, option1, option2 }) {
    return (
        <Select label={label}>
            <SelectItem>{option1}</SelectItem>
            <SelectItem>{children}</SelectItem>
        </Select>
    )
}