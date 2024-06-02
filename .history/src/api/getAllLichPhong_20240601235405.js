export default async function getAllLichPhong() {
    const roomSchedule = await fetch("http://localhost:8080/LichPhong/list",{
        
    });
    const roomScheduleList = await roomSchedule.json();

    return roomScheduleList;
}