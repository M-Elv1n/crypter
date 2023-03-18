function burger() {
    const menuBtn = document.querySelector(".header__hamburger")
    let menu = document.querySelector(".header__mobil")

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active")
        menu.classList.toggle("active")
    })
}

burger()