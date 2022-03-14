import coming from './showAll.js';
const input = document.getElementById("search")
const url = window.location.href;
var urlcut = (url.split('?')[1]);
function searchTitle() {
    input.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            const value = input.value
            location.href = `../pages/searchByTitle/index.html?${value}`;
            input.value = "";
        }
    })
}
if (window.location.href.indexOf('searchByTitle') > -1) {
    window.onload = () => {
        fetch(`https://imdb-api.com/en/API/SearchTitle/k_4igxn67a/${urlcut}`)
            .then(response => response.json())
            .then(data => {
                coming(data.results)
            });
    }
}
searchTitle()
export default searchTitle
