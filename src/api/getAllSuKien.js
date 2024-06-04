export default async function getAllSuKien() {
    const sukien = await fetch("http://localhost:8080/SuKien/list");
    const sukienList = await sukien.json();
    const result = sukienList.result;
    
    return result;
}