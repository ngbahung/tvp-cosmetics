import { Button, Link } from "@nextui-org/react";

export default function TabButton({ href, children }) {
    return (
        <Button as={Link} href={href} color="text-[var(--primary-white-100)]">
            <text className="">{children}</text>
        </Button>
    )
}