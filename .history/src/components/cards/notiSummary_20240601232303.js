'use client'
import Link from "next/link";
import { FilePenLine } from 'lucide-react';

import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure, Card, CardBody, CardHeader, ModalHeader } from "@nextui-org/react";

export default function NotiSummary({ id, announcementTittle, postedDate, content, type, isEdit }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    console.log(type, id);
    return (
        <>
            <Card className="p-2">
                <CardHeader className="flex items-center">
                    <h4 className="font-extrabold flex-1 text-xl text-green">{announcementTittle}</h4>
                    {
                        isEdit &&
                        <button onClick={onOpen}>
                            <FilePenLine />
                        </button>
                    }
                </CardHeader>

                <CardBody className="gap-4">
                    <text className="italic font-medium">{postedDate}</text>
                    <text>{content}</text>

                    <Link href={`/${type}/${id}`}>
                        <Button className="w-fit pointer-events-none text-white bg-green font-bold" radius="full" >
                            Xem chi tiết
                        </Button>
                    </Link>
                </CardBody>
            </Card>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="">
                                <p className="w-full text-center text-green">
                                    Xác nhận xóa
                                </p>
                            </ModalHeader>

                            <ModalFooter className="flex justify-center gap-2 pt-0">
                                <Button className='text-green border-green  rounded-full font-bold' variant="bordered" onPress={onClose}>
                                    Không
                                </Button>
                                <Button className='text-white bg-green rounded-full font-bold' onPress={onClose}>
                                    Có
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}