import showTreiler from './treilerBtn.js';
import btnShowMovie from './btnShowMovie.js';


function coming(par) {
    const divWithTitle = document.createElement("div");
    divWithTitle.classList.add("top");
    const divTitle = document.createElement("h1");
    const url = window.location.href;
    var urlcut = (url.split('?')[1]);

    if (window.location.href.indexOf('previewPage') > -1) {

        divTitle.innerHTML = "Resoults for " + urlcut
        divWithTitle.append(divTitle)

    } else if (window.location.href.indexOf('searchByTitle') > -1) {

        divTitle.innerHTML = "Search results for " + urlcut
        divWithTitle.append(divTitle)
    }
    for (let i = 0; i < par.length; i++) {
        let btnShow = new btnShowMovie(par[i].id)
        let treilerBtn = new showTreiler(par[i].id)
        const card = document.createElement("div");
        const buttons = document.createElement("div");
        const img = document.createElement("img");
        const year = document.createElement("span")
        const title = document.createElement("h4");
        const btnAddToWatchList = document.createElement("button");

        year.innerHTML = "Year - ";
        btnAddToWatchList.innerHTML = "Add to watchlist";
        btnAddToWatchList.id = par[i].id;
        btnShow.id = par[i].id;


        card.classList.add("card")
        btnAddToWatchList.classList.add("btn-add-to-watchlist");
        buttons.classList.add("buttons");

        treilerBtn.append(img)
        img.classList.add("image-img")
        img.src = par[i].image;
        year.append(par[i].year)
        card.append(treilerBtn, title, buttons)
        card.append(title)
        let checkYearUndifined = par[i].year
        if (typeof checkYearUndifined !== "undefined") {
            card.append(year)
        }
        buttons.append(btnShow, btnAddToWatchList)
        card.append(buttons)
        title.append(par[i].title);


        divWithTitle.append(card)

        if (window.location.href.indexOf('previewPage') > -1) {

            const section = (document.querySelector('#preview-movies'));
            section.append(divWithTitle)

        } else if (window.location.href.indexOf('searchByTitle') > -1) {
            const section = (document.querySelector('#searchSection'));

            section.append(divWithTitle)
        }
    }
}
export default coming