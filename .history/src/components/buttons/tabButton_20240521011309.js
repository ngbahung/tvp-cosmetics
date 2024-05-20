import { Button, Link } from "@nextui-org/react";

export default function TabButton({ href, children }) {
    return (
        <Button as={Link} href={href} background="var(--primary-green-200)">
            <text className="text-[var(--primary-white-100)]">{children}</text>
        </Button>
    )
}