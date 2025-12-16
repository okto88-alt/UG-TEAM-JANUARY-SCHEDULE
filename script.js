/* SHIFT */
const shiftPagi = [
    "Chandy", "Kenny", "Anggie", "Andi",
    "Firman", "Nibras", "Angga", "Jerry"
];

const shiftMalam = [
    "Vindy", "Kris", "Heno", "Dea",
    "Alfan", "Valvi", "Kheiren", "Sindy"
];

/* JADWAL */
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

/* LOAD SIDEBAR */
function loadSidebar() {
    const pagi = document.getElementById("shiftPagi");
    const malam = document.getElementById("shiftMalam");

    shiftPagi.forEach(n => pagi.innerHTML += `<li>${n}</li>`);
    shiftMalam.forEach(n => malam.innerHTML += `<li>${n}</li>`);
}

/* LOAD TABLE */
function loadSchedule() {
    const body = document.getElementById("scheduleBody");
    body.innerHTML = "";

    schedule.forEach(day => {
        body.innerHTML += `
            <tr>
                <td rowspan="2">${day.date}</td>
                ${Object.values(day.pagi).map(v => `<td>${v}</td>`).join("")}
            </tr>
            <tr>
                ${Object.values(day.malam).map(v => `<td>${v}</td>`).join("")}
            </tr>
        `;
    });
}

/* SEARCH */
function searchNama() {
    const q = document.getElementById("searchInput").value.toLowerCase();
    const result = [];

    schedule.forEach(day => {
        for (let web in day.pagi) {
            if (day.pagi[web].toLowerCase().includes(q)) {
                result.push(`${day.date} | ${day.pagi[web]} | ${web} (Pagi)`);
            }
        }
        for (let web in day.malam) {
            if (day.malam[web].toLowerCase().includes(q)) {
                result.push(`${day.date} | ${day.malam[web]} | ${web} (Malam)`);
            }
        }
    });

    document.getElementById("searchResult").innerHTML =
        q && result.length ? result.join("<br>") : "";
}

/* INIT */
document.addEventListener("DOMContentLoaded", () => {
    loadSidebar();
    loadSchedule();
});
