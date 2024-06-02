'use client';
import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea } from "@nextui-org/react";
import { X } from 'lucide-react';

const AddAndEditButtons = ({ isEditable }) => {
  const [isEdit, setIsEdit] = React.useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [filesUpload, setFilesUpload] = React.useState([]);

  const handleEdit = () => {
    isEdit = is
    setIsEdit((prev) => !prev);
  }


  return (
    <div className="flex items-center gap-2 pb-8">
      <Button radius="full" className="text-white bg-green font-bold" onPress={onOpen}>Thêm</Button>
      <Button radius="full" className="text-white bg-green font-bold" onPress={handleEdit}>Quản lý</Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Thêm</ModalHeader>
              <ModalBody>
                <div className='flex flex-col gap-3'>
                  <Textarea
                    label="Tiêu đề"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Nhập tiêu đề"

                  />

                  <Textarea
                    label="Mô tả"
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder="Nhập mô tả"
                    minRows={4}
                  />

                  <label className='flex items-center gap-2 cursor-pointer'>
                    <p>Chọn tệp</p>
                    <input type="file" onChange={(e) => {
                      setFilesUpload((prev) => ([...prev, ...Array.from(e.target.files)]))
                      e.target.value = '';

                    }} multiple className="hidden" />
                    <button type='button' className='text-black border px-2 pointer-events-none'>Upload</button>
                  </label>

                  <div className='flex flex-col gap-2 max-h-[200px] overflow-y-auto'>
                    {
                      filesUpload && filesUpload.map((file, index, arr) => (
                        <div key={index} className='flex items-center max-w-full justify-between'>
                          <p>
                            {file.name}
                          </p>
                          <button onClick={() => {
                            arr.splice(index, 1);
                            setFilesUpload([...arr]);
                          }}>
                            <X className='ml-2' />
                          </button>
                        </div>
                      ))
                    }
                  </div>

                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" radius='full' variant="light" onPress={onClose}>
                  Đóng
                </Button>
                <Button className='text-white bg-green rounded-full font-bold' onPress={onClose}>
                  Thêm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AddAndEditButtons