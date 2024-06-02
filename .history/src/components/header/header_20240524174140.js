'use client'
import React from "react";
import TVPLogo from "../../assets/Logo TVP Cosmetics.png";
import Image from "next/image";
import TabButton from "../buttons/tabButton";
import TabDropdown from "../buttons/tabDropdown";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-col h-[235px] ">
            <div className="flex justify-around h-[67%] bg-blue items-center p-1">
                <Image src={TVPLogo} alt="TVP Cosmetics Logo" width={100} height={100} />
                <h1 className="text-white">CÔNG TY TNHH TVP COSMETICS</h1>
                <Link className="flex self-end underline italic text-white" href="/login" >
                    Đăng xuất
                </Link>
            </div>

            <div className="flex w-full justify-around items-center  bg-green ">
                {
                    [
                        {
                            label: "TRANG CHỦ",
                            href: "/"
                        },
                        {
                            label: "THÔNG BÁO",
                            dropDown: {
                                option1: "Thông báo nội bộ",
                                href1: "/internalAnnouncement",
                                option2: "Bản tin",
                                href2: "/newsPage"
                            }
                        },
                        {
                            label: "LỊCH PHÒNG",
                            href: "/roomSchedule"
                        },
                        {
                            label: "HỒ SƠ",
                            href: "/profile"
                        },
                        {
                            label: "NGHỈ PHÉP",
                            dropDown: {
                                option1: "Yêu cầu nghị phép",
                                href1: "/requestOff",
                                option2: "Phê duyệt nghỉ phép",
                                href2: "/approveRequest"
                            }
                        }
                    ].map((tab, index) => {
                        return (
                            <div key={index} className="flex-1 flex justify-center items-center
                            border-t-[10px] border-green hover:border-orange py-[18px] pt-[8px]">
                                {
                                    tab.dropDown ? (
                                        <TabDropdown
                                            label={tab.label}
                                            option1={tab.dropDown?.option1}
                                            href1={tab.dropDown?.href1}
                                            option2={tab.dropDown?.option2}
                                            href2={tab.dropDown?.href2}
                                        />
                                    ) : (
                                        <TabButton href={tab.href}>{tab.label}</TabButton>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}