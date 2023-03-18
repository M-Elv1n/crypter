function timer() {
    const deadLine = new Date(2023, 03, 01)

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date())
        const days = Math.floor(t / (1000 * 60 * 60 * 24))
        const hours = Math.floor((t / (1000 * 60 * 60) % 24))
        const minutes = Math.floor((t / 1000 / 60) % 60)
        const seconds = Math.floor((t / 1000) % 60)

        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    function setClock(selector, endtime) {
        const timer = document.getElementsByClassName(selector)
        const days = document.querySelector(".time__dys")
        const hours = document.querySelector(".time__hrs")
        const minutes = document.querySelector(".time__mins")
        const seconds = document.querySelector(".time__secs ")
        const timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function updateClock() {
            const t = getTimeRemaining(endtime)

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock(".time", deadLine)
}

function swipper() {

    let item = document.querySelectorAll('.item');
    const itemLength = item.length;

    const rightArrow = document.querySelector("#arrow--right");
    const leftArrow = document.querySelector("#arrow--left");
    let slider = [];
    for (let i = 0; i < itemLength; i++) {
        slider[i] = item[i];
        item[i].remove();
    }
    let step = 0;
    let offset = 0;


    function burgerSlider() {
        let div = document.createElement('div');
        div = slider[slider.length - 1];
        div.classList.add('item');
        div.style.left = -400 + 'px';
        document.querySelector('.items').appendChild(div);


        div = slider[step];
        div.classList.add('item');
        div.style.left = offset * 400 + 'px';
        document.querySelector('.items').appendChild(div);
        div = slider[step + 1];
        div.classList.add('item');
        div.style.left = offset * 400 + 400 + 'px';
        document.querySelector('.items').appendChild(div);
        offset = 1;


    }
    function burgerSliderL() {
        console.log(step);
        if (step == (slider.length - 1)) {
            step = 1;
        } else {
            if (step == (slider.length - 2)) {
                step = 0;
            } else {
                step = (step + 2);
            }
        }
        console.log(step);
        let div = document.createElement('div');
        div = slider[step];
        div.classList.add('item');
        div.style.left = offset * 400 + 'px';
        // console.log(div);
        document.querySelector('.items').appendChild(div);

        if (step == 0) {
            step = (slider.length - 1);
        } else {
            step = (step - 1);
        }
        console.log(step);
        offset = 1;
    }

    function left() {
        leftArrow.onclick = null;
        // 
        let slider2 = document.querySelectorAll('.item');
        let offset2 = -1;
        // console.log(slider2.length);
        for (let i = 0; i < slider2.length; i++) {
            slider2[i].style.left = offset2 * 400 - 400 + 'px';
            offset2++;
        }
        setTimeout(function () {
            slider2[0].remove();
            burgerSliderL();
            leftArrow.onclick = left;
        }, 600);
        // timer()
    }

    function burgerSliderR() {
        console.log(step);
        if (step == 0) {
            step = (slider.length - 2);
        } else {
            if (step == 1) {
                step = (slider.length - 1);
            } else {
                step = (step - 2);
            }
        }
        console.log(step);
        let offset = -1;
        let div = document.createElement('div');
        div = slider[step];
        div.classList.add('item');
        div.style.left = offset * 400 + 'px';
        // console.log(div);
        document.querySelector('.items').insertBefore(div, items.firstElementChild);
        if (step == (slider.length - 1)) {
            step = 0;
        } else {
            step = (step + 1);
        }
        console.log(step);
        offset = 1;
    }

    function right() {

        rightArrow.onclick = null;

        let slider2 = document.querySelectorAll('.item');
        let offset2 = (slider2.length - 1);

        for (let i = (slider2.length - 1); i >= 0; i--) {
            slider2[i].style.left = offset2 * 400 + 'px';
            offset2--;
        }
        setTimeout(function () {
            slider2[(slider2.length - 1)].remove();
            burgerSliderR();
            rightArrow.onclick = right;
        }, 600);

        timer()
    }


    burgerSlider();
    step = 0;

    leftArrow.onclick = left;
    rightArrow.onclick = right;


}

// function swipperSeller() {

//     let item = document.querySelectorAll('.seller__item');
//     const itemLength = item.length;

//     const rightArrow = document.querySelector("#btn-prev");
//     const leftArrow = document.querySelector("#btn-next");
//     let slider = [];
//     for (let i = 0; i < itemLength; i++) {
//         slider[i] = item[i];
//         item[i].remove();
//     }
//     let step = 0;
//     let offset = 0;

//     function burgerSlider() {
//         let div = document.createElement('div');
//         div = slider[slider.length - 1];
//         div.classList.add('seller__item');
//         div.style.left = -1000 + 'px';
//         document.querySelector('.seller__items').appendChild(div);


//         div = slider[step];
//         div.classList.add('seller__item');
//         div.style.left = offset * 1000 + 'px';
//         document.querySelector('.seller__items').appendChild(div);
//         div = slider[step + 1];
//         div.classList.add('seller__item');
//         div.style.left = offset * 1000 + 1000 + 'px';
//         document.querySelector('.seller__items').appendChild(div);
//         offset = 1;


//     }
//     function burgerSliderL() {
//         console.log(step);
//         if (step == (slider.length - 1)) {
//             step = 1;
//         } else {
//             if (step == (slider.length - 2)) {
//                 step = 0;
//             } else {
//                 step = (step + 2);
//             }
//         }
//         console.log(step);
//         let div = document.createElement('div');
//         div = slider[step];
//         div.classList.add('seller__item');
//         div.style.left = offset * 1000 + 'px';
//         // console.log(div);
//         document.querySelector('.seller__items').appendChild(div);

//         if (step == 0) {
//             step = (slider.length - 1);
//         } else {
//             step = (step - 1);
//         }
//         console.log(step);
//         offset = 1;
//     }

//     function left() {
//         leftArrow.onclick = null;
//         // 
//         let slider2 = document.querySelectorAll('.seller__item');
//         let offset2 = -1;
//         // console.log(slider2.length);
//         for (let i = 0; i < slider2.length; i++) {
//             slider2[i].style.left = offset2 * 1000 - 1000 + 'px';
//             offset2++;
//         }
//         setTimeout(function () {
//             slider2[0].remove();
//             burgerSliderL();
//             leftArrow.onclick = left;
//         }, 600);

//     }

//     function burgerSliderR() {
//         console.log(step);
//         if (step == 0) {
//             step = (slider.length - 2);
//         } else {
//             if (step == 1) {
//                 step = (slider.length - 1);
//             } else {
//                 step = (step - 2);
//             }
//         }
//         console.log(step);
//         let offset = -1;
//         let div = document.createElement('div');
//         div = slider[step];
//         div.classList.add('seller__item');
//         div.style.left = offset * 1000 + 'px';
//         // console.log(div);
//         document.querySelector('.seller__items').appendChild(div);
//         if (step == (slider.length - 1)) {
//             step = 0;
//         } else {
//             step = (step + 1);
//         }
//         console.log(step);
//         offset = 1;
//     }

//     function right() {

//         rightArrow.onclick = null;

//         let slider2 = document.querySelectorAll('.seller__item');
//         let offset2 = (slider2.length - 1);

//         for (let i = (slider2.length - 1); i >= 0; i--) {
//             slider2[i].style.left = offset2 * 1000 + 'px';
//             offset2--;
//         }
//         setTimeout(function () {
//             slider2[(slider2.length - 1)].remove();
//             burgerSliderR();
//             rightArrow.onclick = right;
//         }, 600);
//     }


//     burgerSlider();
//     step = 0;

//     leftArrow.onclick = left;
//     rightArrow.onclick = right;


// }

function swipperSeller() {
    let firstSliderSlides = document.querySelectorAll(".seller__item");
    let firstPreBtn = document.getElementById("btn-prev");
    let firstNextBtn = document.getElementById("btn-next");
    let firstSliderCurrentI = 0;
    let firstSliderLastI = firstSliderSlides.length - 1;

    firstSliderSlides.forEach((slide, index) => {
        slide.style.transform = `translate(${index * 100}%)`;
    });


    firstPreBtn.addEventListener("click", () => {
        if (firstSliderCurrentI == 0) {
            firstSliderCurrentI = firstSliderLastI;
        } else {
            firstSliderCurrentI--;
        }

        firstSliderSlides.forEach((slide, index) => {
            let falan = (index - firstSliderCurrentI) * 100;
            slide.style.transform = `translateX(${falan}%)`;
            firstSliderSlides[index].style.zIndex = index + 1;

        });

    });

    firstNextBtn.addEventListener("click", () => {
        if (firstSliderCurrentI == firstSliderLastI) {
            firstSliderCurrentI = 0;
        } else {
            firstSliderCurrentI++;
        }

        firstSliderSlides.forEach((slide, index) => {
            let falan = (index - firstSliderCurrentI) * 100;
            slide.style.transform = `translateX(${falan}%)`;
            firstSliderSlides[index].style.zIndex = firstSliderSlides.length - index;


        });
    });

}

function filter() {
    const filterBox = document.querySelectorAll(".discovery__main")

    document.querySelector(".discovery__filter").addEventListener("click", event => {
        if (event.target.className !== "discovery__filter--container__item") return false
        let filterClass = event.target.dataset['f']
        console.log(filterClass)

        filterBox.forEach(elem => {
            elem.classList.remove("hide")
            if (elem.classList !== "hide") {
            }
            if (!elem.classList.contains(filterClass) && filterClass !== "all") {
                elem.classList.add("hide")
            }
        })
    })
}

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

function loadmore() {
    const showMore = document.querySelector(".show-more")

    const productsLength = document.querySelectorAll(".discovery__main").length

    let items = 4

    showMore.addEventListener("click", () => {
        items += 4
        const array = Array.from(document.querySelector(".discovery__container").children)
        const visItems = array.slice(0, items)
        console.log("asdasd")

        visItems.forEach(el => el.classList.add("is-visible"))

        if (visItems.length === productsLength) {
            showMore.style.display = "none"
        }
    })
}

function burger() {
    const menuBtn = document.querySelector(".header__hamburger")
    let menu = document.querySelector(".header__mobil")

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active")
        menu.classList.toggle("active")
    })
}

function dropdawn() {
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    const btn = document.querySelector(".dropbtn")

    btn.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
        myFunction()
    }
}

function dropdawnFilter() {
    function myFunction() {
        document.getElementById("filter__myDropdown").classList.toggle("filter__show");
    }

    const btn = document.querySelector(".filter__dropbtn")

    btn.onclick = function (event) {
        if (!event.target.matches('.filter__dropbtn')) {
            var dropdowns = document.getElementsByClassName("filter__dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('filter__show')) {
                    openDropdown.classList.remove('filter__show');
                }
            }
        }
        myFunction()
    }
}

function filterDropdawn() {
    const filterBox = document.querySelectorAll(".discovery__main")

    document.querySelector(".filter__dropdown--container").addEventListener("click", event => {
        if (event.target.className !== "filter__dropdown--container__item") return false
        let filterClass = event.target.dataset['t']
        console.log(filterClass)

        filterBox.forEach(elem => {
            elem.classList.remove("hide")
            if (elem.classList !== "hide") {
            }
            if (!elem.classList.contains(filterClass) && filterClass !== "all") {
                elem.classList.add("hide")
            }
        })
    })
}

function loadAvatar() {
    const showMore = document.querySelector(".future__lates--btn")

    const productsLength = document.querySelectorAll(".future__lates--prof").length

    let items = 4

    showMore.addEventListener("click", () => {
        items += 1
        const array = Array.from(document.querySelector(".future__container").children)
        const visItems = array.slice(0, items)

        visItems.forEach(el => el.classList.add("ad-visible"))

        if (visItems.length === productsLength) {
            showMore.style.display = "none"
        }
    })
}


timer()
swipper()
swipperSeller()
filter()
loadmore()
load()
burger()
dropdawn()
dropdawnFilter()
filterDropdawn()
loadAvatar()