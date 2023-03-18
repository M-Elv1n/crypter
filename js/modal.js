function modal() {
    const modal = document.querySelector(".modal")
    const overlay = document.querySelector(".overlay__modal")
    const closeBtn = document.querySelector(".btn__modal--close")
    const openBtn = document.querySelector(".btn__modal--open")

    const openModal = () => {
        modal.classList.remove("hidden__modal")
        overlay.classList.remove("hidden__modal")
    }

    const closeModal = () => {
        modal.classList.add("hidden__modal")
        overlay.classList.add("hidden__modal")
    }

    openBtn.addEventListener("click", openModal)
    closeBtn.addEventListener("click", closeModal)
    modal.addEventListener("click", closeModal)
}

function modalYellow() {
    const modal = document.querySelector(".modal")
    const overlay = document.querySelector(".overlay__modal")
    const closeBtn = document.querySelector(".btn__modal--close")
    const openBtn = document.querySelector(".btn__modal--open__yellow")

    const openModal = () => {
        modal.classList.remove("hidden__modal")
        overlay.classList.remove("hidden__modal")
    }

    const closeModal = () => {
        modal.classList.add("hidden__modal")
        overlay.classList.add("hidden__modal")
    }

    openBtn.addEventListener("click", openModal)
    closeBtn.addEventListener("click", closeModal)
    modal.addEventListener("click", closeModal)
}

function modalPink() {
    const modal = document.querySelector(".modal")
    const overlay = document.querySelector(".overlay__modal")
    const closeBtn = document.querySelector(".btn__modal--close")
    const openBtn = document.querySelector(".btn__modal--open__pink")

    const openModal = () => {
        modal.classList.remove("hidden__modal")
        overlay.classList.remove("hidden__modal")
    }

    const closeModal = () => {
        modal.classList.add("hidden__modal")
        overlay.classList.add("hidden__modal")
    }

    openBtn.addEventListener("click", openModal)
    closeBtn.addEventListener("click", closeModal)
    modal.addEventListener("click", closeModal)
}

modal()
modalYellow()
modalPink()