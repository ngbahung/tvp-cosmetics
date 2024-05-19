import Link from "next/link";
import styles from "./header.module.css";
import TVPLogo from "../../images/Lo";

export default function Header() {
    return(
        <>
        <div className={styles.headerContainer}>
            
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
        </>
    )
}