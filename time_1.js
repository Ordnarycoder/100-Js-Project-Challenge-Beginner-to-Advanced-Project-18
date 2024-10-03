var timer = setInterval(watch, 1000); 

function watch() {
    const now = new Date()

    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    const watch = document.getElementsByClassName("watch")

    watch[0].textContent = `${hours}:${minutes}:${seconds}`
}
