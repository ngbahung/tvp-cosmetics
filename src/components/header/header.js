"use client";
import React from "react";
import Link from "next/link";

import styles from "./header.module.css";
import TVPLogo from "../../images/Logo TVP Cosmetics.png";
import Image from "next/image";
import { Button, Tabs, Tab } from "@nextui-org/react";
import TabButton from "../buttons/tabButton";
import TabSelect from "../buttons/tabDropdown";
import TabDropdown from "../buttons/tabDropdown";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <Image
          src={TVPLogo}
          alt="TVP Cosmetics Logo"
          width={100}
          height={100}
        />
        <h1 className="text-[var(--primary-white-100)]">
          CÔNG TY TNHH TVP COSMETICS
        </h1>
        <div className="flex self-end">
          <Button className="bg-transparent" disableAnimation>
            <text className="underline italic text-[var(--primary-white-100)]">
              <b>Đăng xuất</b>
            </text>
          </Button>
        </div>
      </div>

      <div className={styles.tabs}>
        <div className={styles.tabContainer}>
          <TabButton href="/">TRANG CHỦ</TabButton>
        </div>

        <div className={styles.tabContainer}>
          <TabDropdown
            label="THÔNG BÁO"
            option1="Thông báo nội bộ"
            href1="/"
            option2="Bản tin"
            href2="/"
          />
        </div>

        <div className={styles.tabContainer}>
          <TabButton href="./">LỊCH PHÒNG</TabButton>
        </div>

        <div className={styles.tabContainer}>
          <TabButton href="/">HỒ SƠ</TabButton>
        </div>

        <div className={styles.tabContainer} v>
          <TabDropdown
            label="NGHỈ PHÉP"
            option1="Yêu cầu nghỉ phép"
            href1="/"
            option2="Bản tin"
            href2="/"
          />
        </div>
      </div>
    </div>
  );
}
