const section = document.querySelector("#treiler")

function createIframe(data) {
    const mainDiv = document.createElement("div")
    const treilerDiv = document.createElement("div")
    const iframe = document.createElement("iframe")

    iframe.classList.add("iframe");
    mainDiv.classList.add("container");
    treilerDiv.classList.add("iframe-holder");

    iframe.src = (data.linkEmbed)

    treilerDiv.append(iframe)
    mainDiv.append(treilerDiv)
    section.append(mainDiv)

    console.log(data)
}
export default createIframe