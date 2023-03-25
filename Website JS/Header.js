const header = document.querySelector("header")

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY

    if(scrolled >= 600)
    {
        header.style.opacity = "1"
        header.style.pointerEvents = "all"

        console.log("high")
    } else
    {
        header.style.opacity = "0"
        header.style.pointerEvents = "none"
    }
})