import { Button, Link } from "@nextui-org/react";

export default function TabButton({ href, children }) {
    return (
        <Button as={Link} href={href} className="bg-transparent" disableAnimation>
            <h2 className="text-white">
                <b>{children}</b>
            </h2>
        </Button>
    )
}