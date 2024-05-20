import { Select, SelectItem, Dropdown, DropdownItem } from "@nextui-org/react";

export default function TabDropdown({ label, option1, option2 }) {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button 
                variant="bordered" 
                >
                Open Menu
                </Button>
            </DropdownTrigger>

        </Dropdown>
    )
}