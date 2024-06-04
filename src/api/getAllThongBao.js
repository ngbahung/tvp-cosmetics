export default async function getAllThongBao() {
    const thongbao = await fetch("http://localhost:8080/ThongBao/list");
    const thongbaoList = await thongbao.json();
    const result = thongbaoList.result;
    
    return result;
}