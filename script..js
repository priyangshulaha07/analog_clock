function updateClock() {
    const now = new Date();

    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (minutes * 0.5);
    const minuteDeg = (minutes * 6) + (seconds * 0.1);
    const secondDeg = seconds * 6;

    document.querySelector('.hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.querySelector('.minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.querySelector('.second-hand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
