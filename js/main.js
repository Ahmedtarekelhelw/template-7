let arrowDown = document.querySelector(".landing i")
let articleSec = document.querySelector(".articles")
arrowDown.onclick = function () {
    window.scrollTo({
        top: articleSec.offsetTop
    })
}


let span = document.querySelectorAll(".skills .prog-cont span")
let skills = document.querySelector(".skills")

let statSpan = document.querySelectorAll(".stat .box span:first-of-type")
let stat = document.querySelector(".stat")

window.onscroll = function () {
    if (scrollY >= skills.offsetTop) {
        span.forEach(s =>s.style.width =s.dataset.content)
    }
    if (scrollY >= stat.offsetTop) {
        statSpan.forEach(s => {
            let int =setInterval(() =>{
                if (s.textContent == s.dataset.num) {
                    clearInterval(int)
                }else {
                    s.textContent++
                }
            }, 9000 / s.dataset.num)
        })
    }
}



//timer
let latest = document.querySelectorAll(".lastest-events .timer .time span:first-child")

let sec = 60,
    min = 60,
    hours = 24,
    day = 3

let inter = setInterval(() => {
    sec -= 1
    latest[3].innerHTML = sec
    latest[2].innerHTML = min
    latest[1].innerHTML = hours
    latest[0].innerHTML = day
    for (let i =0; i < latest.length; i++) {
        if (latest[i].innerHTML < 10) {
            latest[i].innerHTML = `0${latest[i].textContent}`
        }
    }

    if (sec === 0 && min > 0) {
        sec = 60
        min -= 1
    } else if (min === 0 && sec === 0 && hours > 0) {
        hours -=1 
        sec = 60
        min = 60
    } else if (hours === 0 && min === 0 && sec === 0) {
        day -= 1
        sec = 60
        min = 60
        hours = 24
    }
},1000)
