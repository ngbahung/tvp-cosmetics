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
                    <a className={styles.link}>Dashboard</a>
                </Link>
                <Link href="/staff">
                    <a className={styles.link}>Staff</a>
                </Link>
            </div>
        </div>
        </>
    )
}