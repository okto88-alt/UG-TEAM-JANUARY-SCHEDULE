const shiftPagi = ["Dea", "Kris", "Valvi"];
const shiftMalam = ["Heno", "Alfan", "Kheiren", "Sindy"];

const schedule = [
    {
        date: "10-Dec-2025",
        pagi: {
            SURIA88: "Dea",
            HAKABET: "Kris",
            VIOBET: "Heno",
            TEMPO88: "Alfan",
            FILA88: "Kheiren",
            IJOBET: "Sindy",
            HAHAWIN88: "Valvi"
        },
        malam: {
            SURIA88: "Heno",
            HAKABET: "Valvi",
            VIOBET: "Dea",
            TEMPO88: "Kris",
            FILA88: "Alfan",
            IJOBET: "Kheiren",
            HAHAWIN88: "-"
        }
    }
];

/* LOAD SIDEBAR */
function loadSidebar() {
    shiftPagi.forEach(n => {
        document.getElementById("shiftPagi").innerHTML += `<li>${n}</li>`;
    });
    shiftMalam.forEach(n => {
        document.getElementById("shiftMalam").innerHTML += `<li>${n}</li>`;
    });
}

/* LOAD TABLE */
function loadSchedule() {
    const body = document.getElementById("scheduleBody");
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
        q && result.length
            ? result.join("<br>")
            : "";
}

/* INIT */
loadSidebar();
loadSchedule();
