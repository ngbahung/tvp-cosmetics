export default async function getAllLichPhong() {
    const roomSchedule = await fetch("http://localhost:8080/LichPhong/list",{
        method: 'GET',
        headers: {
            cache: 'no-cache',
        }
    });
    const roomScheduleList = await roomSchedule.json();

    return roomScheduleList;
}