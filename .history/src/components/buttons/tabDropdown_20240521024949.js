import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button } from "@nextui-org/react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function TabDropdown({ label, option1, href1, option2, href2}) {
    return (
        <Dropdown className="flex w-full">
            <DropdownTrigger>
                <Button className="bg-transparent" disableAnimation endContent={<ChevronDown color="white"/>}>
                    <text className="text-white">
                        <b>{label}</b>
                    </text>
                </Button>
            </DropdownTrigger>

            <DropdownMenu className="hover:bg-[var(--primary-orange-100)]">
                <DropdownItem key={option1} href={href1}>
                    {option1}
                </DropdownItem>

                <DropdownItem key={option2} href={href2}>
                    {option2}
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}