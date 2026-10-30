
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function updateClock() {

    const now = new Date();

    // ANALOG CLOCK
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    const hourDeg =
        hours * 30 + minutes * 0.5;

    const minuteDeg =
        minutes * 6 + seconds * 0.1;

    const secondDeg =
        seconds * 6 + milliseconds * 0.006;

    hourHand.style.transform =
        `translateX(-50%) rotate(${hourDeg}deg)`;

    minuteHand.style.transform =
        `translateX(-50%) rotate(${minuteDeg}deg)`;

    secondHand.style.transform =
        `translateX(-50%) rotate(${secondDeg}deg)`;


    // DIGITAL CLOCK
    let digitalHours = now.getHours();

    const ampm = digitalHours >= 12 ? "PM" : "AM";

    digitalHours = digitalHours % 12 || 12;

    const formattedHours =
        String(digitalHours).padStart(2, "0");

    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");

    document.getElementById("digitalTime").textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    document.getElementById("ampm").textContent = ampm;


    // DAY
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    document.getElementById("digitalDay").textContent =
        days[now.getDay()];


    // DATE
    const date = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    document.getElementById("digitalDate").textContent = date;

}

// UPDATE EVERY 50 MILLISECONDS

updateClock();

setInterval(updateClock, 50);
