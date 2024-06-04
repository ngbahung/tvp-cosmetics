export default async function getAllNhanVien() {
    const nhanvien = await fetch("http://localhost:8080/NhanVien/list");
    const nhanvienList = await nhanvien.json();

    const result = nhanvienList.result;
    return result;
}