

import NotiSummary from "../../components/cards/notiSummary";
import { Pagination } from "@nextui-org/react";

import AddAndEditButtons from "../../components/groupButtons/addAndEditButtons";
import getAllBanTin from "../../api/getAllBanTin";


export default async function internalAnnouncement() {
  const [isEdit, setIsEdit] = useState(false);

  const bantin = await getAllBanTin();
  console.log(bantin);

  return (
    <div className="px-[10rem] py-[3rem]">

      <AddAndEditButtons handleEdit={() => {
        setIsEdit((prev) => !prev);
      }} />


      <div className="flex flex-col gap-[3rem] ">
        {bantin.map((bt, id) => (
            <NotiSummary key={id} id={bt.id} announcementTittle={bt.TieuDe} postedDate={"T6, 12/04/2024 - 16:45"} content={bt.NoiDung} type={'newsPage'} isEdit={isEdit} />
          ))
        }
      </div>

      <div className="flex justify-center pt-[3rem]">
        <Pagination total={10} initialPage={1} />
      </div>
    </div>


  );
}