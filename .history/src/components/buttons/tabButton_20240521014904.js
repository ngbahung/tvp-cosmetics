import { Button, Link } from "@nextui-org/react";

export default function TabButton({ href, children }) {
    return (
        <Button as={Link} href={href}>
            <b>{children}</b>
        </Button>
    )
}