export default async function getAllPhongBan() {
    const phongban = await fetch("http://localhost:8080/PhongBan/list");
    const phongbanList = await phongban.json();

    const result = phongbanList.result;
    return result;
}