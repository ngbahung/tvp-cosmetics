import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return(
        <>
        <div className={styles.background}>
            <div className={styles.container}>
                <Link href="/">
                    Home
                </Link>
                <Link href="/dashboard">
                    Dashboard
                </Link>
                <Link href="/staff">
                    Staff
                </Link>
            </div>
        </div>
        </>
    )
}