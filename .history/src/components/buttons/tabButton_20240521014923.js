import { Button, Link } from "@nextui-org/react";

export default function TabButton({ href, children }) {
    return (
        <Button as={Link} href={href}>
            <text className="text-[var(--primary-white-100)] ">
                <b>{children}</b>
            </text>
        </Button>
    )
}