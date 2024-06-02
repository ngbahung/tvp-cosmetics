export default async function getAllLichPhong() {
    const roomSchedule = await fetch("http://localhost:8080/LichPhong/list",{
        headers
    });
    const roomScheduleList = await roomSchedule.json();

    return roomScheduleList;
}