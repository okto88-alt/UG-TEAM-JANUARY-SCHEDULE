/* ===============================
   DATA SHIFT
================================ */
const shiftPagi = [
    "Chandy", "Kenny", "Anggie", "Andi",
    "Firman", "Nibras", "Angga", "Jerry"
];

const shiftMalam = [
    "Vindy", "Kris", "Heno", "Dea",
    "Alfan", "Valvi", "Kheiren", "Sindy"
];

/* ===============================
   DATA JADWAL
================================ */
const schedule = [
    {
        date: "17-Dec-2025",
        pagi: {
            SURIA88: "Nibras",
            HAKABET: "Andi",
            VIOBET: "Anggie",
            TEMPO88: "Firman",
            FILA88: "Angga",
            IJOBET: "Jerry",
            HAHAWIN88: "Kenny"
        },
        malam: {
            SURIA88: "Dea",
            HAKABET: "Kris",
            VIOBET: "Heno",
            TEMPO88: "Alfan",
            FILA88: "Kheiren",
            IJOBET: "Sindy",
            HAHAWIN88: "Valvi"
        }
    },
    {
        date: "18-Dec-2025",
        pagi: {
            SURIA88: "Nibras",
            HAKABET: "Kenny",
            VIOBET: "Chandy",
            TEMPO88: "Firman",
            FILA88: "Angga",
            IJOBET: "Jerry",
            HAHAWIN88: "Kenny"
        },
        malam: {
            SURIA88: "Dea",
            HAKABET: "Kris",
            VIOBET: "Heno",
            TEMPO88: "Alfan",
            FILA88: "Valvi",
            IJOBET: "Sindy",
            HAHAWIN88: "Kris, Alfan"
        }
    }
];

/* ===============================
   LOAD SIDEBAR
================================ */
function loadSidebar() {
    const pagiEl = document.getElementById("shiftPagi");
    const malamEl = document.getElementById("shiftMalam");

    shiftPagi.forEach(n => pagiEl.innerHTML += `<li>${n}</li>`);
    shiftMalam.forEach(n => malamEl.innerHTML += `<li>${n}</li>`);
}

/* ===============================
   LOAD TABLE
================================ */
function loadSchedule() {
    const body = document.getElementById("scheduleBody");
    body.innerHTML = "";

    schedule.forEach(day => {
        body.innerHTML += `
            <tr>
                <td rowspan="2">${day.date}</td>
