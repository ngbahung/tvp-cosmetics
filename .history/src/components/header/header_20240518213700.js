import Link from "next/link";
import styles from "./header.module.css";
import TVPLogo from "../../images/Logo TVP Cosmetics.png";
import Image from "next/image";

export default function Header() {
    return(
        <>
        <div className={styles.headerContainer}>
            <div className={styles.logo}>
                <Image src={TVPLogo} alt="TVP Cosmetics Logo" width={100} height={100} />
                <h1 className="text-[var(--)]">CÔNG TY TNHH TVP COSMETICS</h1>
            </div>

            <div>

            </div>
        </div>
        </>
    )
}