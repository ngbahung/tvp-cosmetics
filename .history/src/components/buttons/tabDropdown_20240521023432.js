import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button } from "@nextui-org/react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function TabDropdown({ label, option1, href1, option2, href2}) {
    return (
        <Dropdown className="flex w-full">
            <DropdownTrigger>
                <Button className="bg-transparent" disableAnimation endContent={<ChevronDown color="white"/>}>
                    <h1 className="text-white">
                        <b>{label}</b>
                    </h1>
                </Button>
            </DropdownTrigger>

            <DropdownMenu>
                <DropdownItem key={option1}>
                    <Link href={href1}>{option1}</Link>
                </DropdownItem>

                <DropdownItem key={option2}>
                    <Link href={href2}>{option2}</Link>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}