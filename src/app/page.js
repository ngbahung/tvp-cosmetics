import ProfileCard from "../components/cards/profileCard";
import Logo from "../assets/Logo TVP Cosmetics.png";
import EventCard from "../components/cards/eventCard";
import NotiCard from "../components/cards/notiCard";
import getAllThongBao from "../api/getAllThongBao";
import getAllSuKien from "../api/getAllSuKien";
import getAllBanTin from "../api/getAllBanTin";
import getAllNhanVien from "../api/getAllNhanVien";
import getAllPhongBan from "../api/getAllPhongBan";

export default async function Home() {
  const thongbao = await getAllThongBao();
  const sukien = await getAllSuKien();
  const bantin = await getAllBanTin();
  const nhanvien = await getAllNhanVien();
  const phongban = await getAllPhongBan();


  const joinedData = thongbao.map((tb) => {
    const sk = sukien.filter((sk) => sk.id === tb.SK_id);
    return {
      ...tb,
      ...sk
    }
  });

  const joinedData2 = bantin.map((bt) => {
    const sk = sukien.filter((sk) => sk.id === bt.SK_id);
    return {
      ...bt,
      ...sk
    }
  });

  const joinedData3 = nhanvien.map((nv) => {
    const pb = phongban.find((pb) => pb.id === nv.PhongBan_id);
    return {
      ...nv,
      ...pb
    }
  }
  );

  console.log(joinedData3);


  const DateFormatter = (date) => {
    const d = new Date(date);
    return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
  }
  
  const monthFormatter = (date) => {
    const d = new Date(date);
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return monthNames[d.getMonth()];
  }

  const dayFormatter = (date) => {
    const d = new Date(date);
    return d.getDate();
  }

  return (
    <div className="flex gap-12 px-[10rem] py-[3rem]">
      <div className="flex flex-col gap-12">
        <ProfileCard imgSrc={Logo}
        name={joinedData3[0].HoTen}
        staffId={joinedData3[0].id}
        position={joinedData3[0].ChucVu}
        department={joinedData3[0].TenPhong}
         />
        
          <EventCard 
          month1={monthFormatter(sukien[0].ThoiGian)} 
          day1={dayFormatter(sukien[0].ThoiGian)} 
          eventName1={sukien[0].TieuDe} 
          dateTime1={sukien[0].GioBatDau}
          month2={monthFormatter(sukien[1].ThoiGian)}
          day2={dayFormatter(sukien[1].ThoiGian)}
          eventName2={sukien[1].TieuDe}
          dateTime2={sukien[1].GioBatDau} 
          />

      </div>

      <div className="flex flex-col flex-1 gap-12">

        <NotiCard notiHeader={"THÔNG BÁO"} rows={
          joinedData.
            map((_, index) => (
              {
                title: joinedData[index].TieuDe,
                date: DateFormatter(joinedData[index][0].ThoiGian),
                time: joinedData[index][0].GioBatDau,
                href: "/internalAnnouncement/0"
              }
            ))}
        />

        <NotiCard notiHeader={"BẢN TIN"}
          rows={
            joinedData2.
              map((_, index) => (
                {
                  title: joinedData2[index].TieuDe,
                  date: DateFormatter(joinedData2[index][0].ThoiGian),
                  time: joinedData2[index][0].GioBatDau,
                  href: "/internalAnnouncement/0"
                }
              ))}
        />
      </div>
    </div>
  );
}
