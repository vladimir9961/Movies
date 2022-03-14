function btnShowMovie(data) {
    const btnShowMovie = document.createElement("button");
    btnShowMovie.innerHTML = "Show details";
    btnShowMovie.classList.add("btn-show-movie");
    // btnShow.id = data.id;
    btnShowMovie.addEventListener("click", (e) => {
        var url = e.target.id
        location.href = `../pages/displayselected/index.html?${url}`;
    })
    return btnShowMovie
}

export default btnShowMovie