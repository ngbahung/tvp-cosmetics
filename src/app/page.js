import ProfileCard from "../components/cards/profileCard";
import Logo from "../assets/Logo TVP Cosmetics.png";
import EventCard from "../components/cards/eventCard";
import NotiCard from "../components/cards/notiCard";

export default function Home() {
  return (
    <div className="flex gap-12 px-[10rem] py-[3rem]">
      <div className="flex flex-col gap-12">
        <ProfileCard imgSrc={Logo} name={"Huy"} staffId={"123"} position={"Trường"} department={"Kinh doanh"} />
        <EventCard />
      </div>

      <div className="flex flex-col flex-1 gap-12">

        <NotiCard notiHeader={"THÔNG BÁO"} rows={
          [...new Array(5)].
            map((_, index) => (
              {
                title: `Tiêu đề ${index + 1}`,
                date: "20/10/2021",
                time: "8:00",
                href: "/"
              }
            ))}
        />

        <NotiCard notiHeader={"BẢN TIN"}
          rows={
            [...new Array(10)].
              map((_, index) => (
                {
                  title: `Tiêu đề ${index + 1}`,
                  date: "20/10/2021",
                  time: "8:00",
                  href: "/"
                }
              ))}
        />
      </div>
    </div>
  );
}
