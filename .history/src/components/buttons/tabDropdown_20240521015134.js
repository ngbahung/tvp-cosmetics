import { Select, SelectItem, Dropdown } from "@nextui-org/react";

export default function TabDropdown({ label, option1, option2 }) {
    return (
        <Select label={label} >
            <SelectItem>{option1}</SelectItem>
            <SelectItem>{option2}</SelectItem>
        </Select>
    )
}