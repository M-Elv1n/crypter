function load() {
    // const preloader = document.createElement("div");
    const preloader = document.getElementById("load");

    preloader.classList.add("preloader");
    preloader.innerHTML = `<div class="b-ico-preloader"></div><div class="spinner"></div>`;
    document.body.appendChild(preloader);

    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.className += " fade"
        }, 1000)
    })
}

load()