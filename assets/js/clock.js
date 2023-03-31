const currentTime = function () {
    const date = new Date();
    const day = document.getElementById("day");
    const mouth = document.getElementById("mouth");
    const year = document.getElementById("year");
    const dayOfWeek = document.getElementById("day-of-week");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    const timeOfDay = document.getElementById("time-of-day");

    let dd = date.getDate();
    let mn = date.getMonth().toString();
    let yy = date.getFullYear().toString();
    let p = date.toDateString().split(" ")[0];
    let hh = date.getHours().toString().padStart(2, "0");
    let mm = date.getMinutes().toString().padStart(2, "0");
    let ss = date.getSeconds();

    var nombresMeses = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    var nombreMesActual = nombresMeses[mn];

    day.innerText = dd;
    mouth.innerText = nombreMesActual;
    year.innerText = yy;
    dayOfWeek.innerText = p;
    hours.innerText = hh;
    minutes.innerText = mm;

    if (ss % 2 === 0) {
        seconds.style.color = "#273026";
        dayOfWeek.style.color = "#273026";
        timeOfDay.style.color = "#273026";
    } else {
        seconds.style.color = "#4f6f52";
        dayOfWeek.style.color = "#4f6f52";
        timeOfDay.style.color = "#4f6f52";
    }

    if (hh < 12) {
        timeOfDay.innerText = "A.M";
    } else {
        timeOfDay.innerText = "P.M";
    }
};

setInterval(currentTime, 1000);

// async function getDateTime() {
//     try {
//         const response = await fetch();
// "https://worldtimeapi.org/api/timezone/America/Mexico_City"
//         const data = await response.json();

//         if (response.ok) {
//             let date = data["datetime"].split("T")[0];
//             let time = data["datetime"].split("T")[1].split(".")[0];
//             localStorage.setItem("date", date);
//             localStorage.setItem("time", time);
//         } else {
//             localStorage.setItem("date", null);
//             localStorage.setItem("time", null);
//         }
//     } catch (error) {
//         console.log(Date());
//     }
// }

// getDateTime();
