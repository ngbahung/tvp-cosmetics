import { Select, SelectItem, Dropdown, DropdownItem, DropdownMenu } from "@nextui-org/react";

export default function TabDropdown({ label, option1, option2 }) {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button 
                variant="bordered" 
                >
                {label}
                </Button>
            </DropdownTrigger>

            <DropdownMenu>
                
            </DropdownMenu>
        </Dropdown>
    )
}