import showTreiler from '../../../js/treilerBtn.js';
const sectionLeft = document.querySelector("#left-side");
const sectionRight = document.querySelector("#right-side");

function showDeatails(par) {
    //HERO IMG DIV
    let treilerBtn = new showTreiler(par.id)

    const imageHero = document.createElement("img")
    imageHero.src = par.image;

    //DIV RIGHT INFO
    const fullTitle = document.createElement("h1");
    fullTitle.append(par.fullTitle)
    //DIV PLOT
    const fullPlot = document.createElement("p");
    fullPlot.append(par.plot)

    //Create div for more info
    const moreInfo = document.createElement("div");
    moreInfo.classList.add("info")
    const runTime = document.createElement("p");
    const releaseDate = document.createElement("p");
    runTime.append("Time: " + par.runtimeStr)
    releaseDate.append("Realease Date: " + par.releaseDate)

    moreInfo.append(releaseDate, runTime)

    sectionRight.append(fullTitle, fullPlot, moreInfo)
    treilerBtn.append(imageHero)
    sectionLeft.append(treilerBtn)
}

export default showDeatails
