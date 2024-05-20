import { Button, Link } from "@nextui-org/react";

export default function TabButton({ href, children }) {
    return (
        <Button as={Link} href={href} className="bg-transparent" disableAnimation>
            <text className="text-white">
                <b>{children}</b>
            </text>
        </Button>
    )
}