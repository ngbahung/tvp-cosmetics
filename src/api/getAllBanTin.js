export default async function getAllBanTin() {
    const news = await fetch("http://localhost:8080/BanTin/list");
    const newList = await news.json();

    return newList;
}