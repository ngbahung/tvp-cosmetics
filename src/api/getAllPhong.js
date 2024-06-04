export default async function getAllPhong() {
    const room = await fetch("http://localhost:8080/Phong/list");
    const roomList = await room.json();
    const result = roomList.result;

    return result;
}