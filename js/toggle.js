function toggle() {
    let theme = localStorage.getItem("theme");

    if (theme == "dark") {
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark")
    } else {
        localStorage.setItem("theme", "dark");
        document.body.classList.add('dark')
    }

}

let mtheme = localStorage.getItem('theme')
if (mtheme == "dark") {
    document.body.classList.add('dark')
} else {
    document.body.classList.remove('dark')
}

document.querySelector('.btn-switch').addEventListener('click', () => {
    toggle()
})
