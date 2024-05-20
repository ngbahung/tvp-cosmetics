import { Button, Link } from "@nextui-org/react";

export default function TabButton({ href }) {
    return (
        <Button as={Link} href={href} background={}>
            <text className="text-[var(--primary-white-100)]">{children}</text>
        </Button>
    )
}