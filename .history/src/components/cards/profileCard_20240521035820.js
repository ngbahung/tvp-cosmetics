import { Card } from "@nextui-org/react";

export default function ProfileCard({ user }) {
    return (
        <Card>
            <Card.Body>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </Card.Body>
        </Card>
    );
}