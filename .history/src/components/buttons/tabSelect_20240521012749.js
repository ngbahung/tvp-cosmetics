import { Select, SelectItem } from "@nextui-org/react";

export default function TabSelect({ label, children }) {
    return (
        <Select label={label}>
            <SelectItem>{option1}</SelectItem>
            <SelectItem>{children}</SelectItem>
        </Select>
    )
}