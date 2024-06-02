export default async function getAllBanTin() {
    const news = await fetch("http://localhost:8080/BanTin/list");
return news.json();

}