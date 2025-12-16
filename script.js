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
const scheduleData = [
  {
    date: "17-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Kris"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Kenny", "Kheiren"],
    IJOBET: ["Jerry", "Sindy"],
    HAHAWIN88: ["Andi, Anggie", "Valvi"]
  },
  {
    date: "18-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Kenny", "Kris"],
    VIOBET: ["Chandy", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Valvi"],
    IJOBET: ["Jerry", "Sindy"],
    HAHAWIN88: ["Kenny, Firman", "Kris, Alfan"]
  },
  {
    date: "19-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Kris"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Kenny", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Sindy"],
    HAHAWIN88: ["Andi, Anggie", "Kris, Alfan"]
  },
  {
    date: "20-Dec-2025",
    SURIA88: ["Kenny", "Heno"],
    HAKABET: ["Andi", "Kris"],
    VIOBET: ["Anggie", "Vindy"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Sindy"],
    HAHAWIN88: ["Andi, Anggie", "Kris, Alfan"]
  },
  {
    date: "21-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Valvi"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Sindy"],
    HAHAWIN88: ["Andi, Anggie", "Valvi, Alfan"]
  },
  {
    date: "22-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Valvi"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Sindy"],
    HAHAWIN88: ["Andi, Anggie", "Valvi, Alfan"]
  },
  {
    date: "23-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Valvi"],
    VIOBET: ["Anggie", "Vindy"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Kris"],
    HAHAWIN88: ["Kenny", "Valvi, Alfan"]
  }
];

/* ===============================
   RENDER TABLE
================================ */
const tbody = document.getElementById("scheduleBody");

scheduleData.forEach(day => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${day.date}</td>
    <td>${day.SURIA88.join("<br>")}</td>
    <td>${day.HAKABET.join("<br>")}</td>
    <td>${day.VIOBET.join("<br>")}</td>
    <td>${day.TEMPO88.join("<br>")}</td>
    <td>${day.FILA88.join("<br>")}</td>
    <td>${day.IJOBET.join("<br>")}</td>
    <td>${day.HAHAWIN88.join("<br>")}</td>
  `;

  tbody.appendChild(row);
});


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

