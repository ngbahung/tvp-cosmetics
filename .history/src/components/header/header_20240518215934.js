import Link from "next/link";
import styles from "./header.module.css";
import TVPLogo from "../../images/Logo TVP Cosmetics.png";
import Image from "next/image";
import { Button, Tabs, Tab} from "@nextui-org/react";

export default function Header() {
    return(
        <div className={styles.headerContainer}>
            <div className={styles.logo}>
                <Image src={TVPLogo} alt="TVP Cosmetics Logo" width={100} height={100} />
                <h1 className="text-[var(--primary-white-100)]">CÔNG TY TNHH TVP COSMETICS</h1>
                <div className="flex self-end">
                    <Button >
                        <text className="underline italic text-[var(--primary-white-100)]"> 
                           <b>Đăng xuất</b>
                        </text>
                    </Button>
                </div>
            </div>

            <div>
                <Tabs>
                    <Tab>
                        <Link href="/home">
                            <a className={styles.tab}>Trang chủ</a>
                        </Link>
                    </Tab>
                    <Tab>
                        <Link href="/products">
                            <a className={styles.tab}>Sản phẩm</a>
                        </Link>
                    </Tab>
                    <Tab>
                        <Link href="/orders">
                            <a className={styles.tab}>Đơn hàng</a>
                        </Link>
                    </Tab>
                    <Tab>
                        <Link href="/customers">
                            <a className={styles.tab}>Khách hàng</a>
                        </Link>
                    </Tab>
                    <Tab>
                        <Link href="/employees">
                            <a className={styles.tab}>Nhân viên</a>
                        </Link>
                    </Tab>
                    <Tab>
                        <Link href="/suppliers">
                            <a className={styles.tab}>Nhà cung cấp</a>
                        </Link>
                    </Tab>
                    <Tab>
                        <Link href="/reports">
                            <a className={styles.tab}>Báo cáo</a>
                        </Link>
                    </Tab>
            </div>
        </div>
        
    )
}