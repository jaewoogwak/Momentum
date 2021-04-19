const time = document.querySelector("h1");

function getTime() {
    const date = new Date();
    const Hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    time.innerText = `${Hours < 10 ? `0${Hours}` : Hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    setInterval(getTime, 1000);
}

function init() {
    getTime();
}

init();