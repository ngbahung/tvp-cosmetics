import { Select, SelectItem, Dropdown, DropdownItem, DropdownMenu } from "@nextui-org/react";
import Link from "next/link";

export default function TabDropdown({ label, option1, href1, option2, href2}) {
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
                <DropdownItem key={option1}>
                    <Link href={href1}>{option1}</Link>
                </DropdownItem>
                <DropdownItem key={option2}>{option2}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}