import showTreiler from './treilerBtn.js';
import btnShowMovie from './btnShowMovie.js';

const section = document.querySelector("#movies");
var n = [];

if (window.innerWidth < 900) {
    n.push(2)
}
else if (window.innerWidth < 1200) {
    n.push(3)
}
else if (window.innerWidth < 1500) {
    n.push(4)
}
else if (window.innerWidth < 2000) {
    n.push(6)
}
function createCardElement(param, param1) {
    const newArray = param.slice(0, n)
    const divWithTitle = document.createElement("div");
    const divTitle = document.createElement("h1");
    const btnShowPage = document.createElement("button");
    btnShowPage.innerHTML = ">";
    divTitle.innerHTML = param1;


    divWithTitle.classList.add("top");
    btnShowPage.id = "show-page";
    btnShowPage.addEventListener("click", () => {
        location.href = `../pages/previewPage/index.html?${param1}`;
        localStorage.setItem("Show all", param1)
        console.log(param1)
    })

    divWithTitle.append(btnShowPage)
    divWithTitle.append(divTitle)

    divWithTitle.classList.add("top")

    for (let i = 0; i < newArray.length; i++) {
        let treilerBtn = new showTreiler(newArray[i].id)
        let btnShow = new btnShowMovie(newArray[i].id)

        const card = document.createElement("div");
        const buttons = document.createElement("div");
        const img = document.createElement("img");
        const year = document.createElement("span")
        const title = document.createElement("h4");
        const btnAddToWatchList = document.createElement("button");

        year.innerHTML = "Year - ";
        btnAddToWatchList.innerHTML = "Add to watchlist";
        btnAddToWatchList.id = newArray[i].id;

        btnAddToWatchList.addEventListener("click", (e) => {
            console.log(e.target.id)
        })

        card.classList.add("card")
        btnAddToWatchList.classList.add("btn-add-to-watchlist");
        buttons.classList.add("buttons");
        img.classList.add("image-img")
        btnShow.id = newArray[i].id;

        img.src = newArray[i].image;

        treilerBtn.append(img)
        year.append(newArray[i].year)
        buttons.append(btnShow, btnAddToWatchList)
        card.append(treilerBtn, year, title, buttons)
        title.append(newArray[i].title);
        divWithTitle.append(card)
        if (window.location.href.indexOf('/index.html') > -1) {
            section.append(divWithTitle)
        }
    }
}

export default createCardElement