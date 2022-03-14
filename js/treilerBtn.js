function showTreiler(id) {
    const treiler = document.createElement("a");
    treiler.id = id;
    // console.log(id)
    treiler.addEventListener("click", (e) => {
        var url = e.target.id
        location.href = `../pages/treiler/index.html?${url}`;
    })
    return treiler
}
export default showTreiler