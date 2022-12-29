const day = document.getElementById("day")
const hrs = document.getElementById("hrs")
const min = document.getElementById("min")
const sec = document.getElementById("sec")

const currentYear = new Date().getFullYear();

const newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`);

function countdownTimer() {
    const todayDate = Date.now();
    console.log(todayDate)

    //разница между текущей датой и НГ
    const gap = newYear - todayDate;
    
    const d = Math.floor(gap / 1000 / 60 / 60 / 24);
    const h = Math.floor((gap / 1000 / 60 / 60) % 24);
    const m = Math.floor((gap / 1000 / 60) % 60);
    const s = Math.floor((gap / 1000) % 60);

    day.innerHTML = d < 10 ? "0" + d : d;
    hrs.innerHTML = h < 10 ? "0" + h : h;
    min.innerHTML = m < 10 ? "0" + m : m;
    sec.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(countdownTimer, 1000)