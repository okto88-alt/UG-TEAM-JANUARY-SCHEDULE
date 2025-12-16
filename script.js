/* ======================================
   SHIFT STAFF LIST
====================================== */
const shiftPagi = [
  "Chandy", "Kenny", "Anggie", "Andi",
  "Firman", "Nibras", "Angga", "Jerry"
];

const shiftMalam = [
  "Vindy", "Kris", "Heno", "Dea",
  "Alfan", "Valvi", "Kheiren", "Sindy"
];

/* ======================================
   RENDER SHIFT LIST (SIDEBAR)
====================================== */
const shiftPagiEl = document.getElementById("shiftPagi");
const shiftMalamEl = document.getElementById("shiftMalam");

function renderShiftList() {
  shiftPagiEl.innerHTML = "";
  shiftMalamEl.innerHTML = "";

  shiftPagi.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    shiftPagiEl.appendChild(li);
  });

  shiftMalam.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    shiftMalamEl.appendChild(li);
  });
}


/* ======================================
   SCHEDULE DATA
   index 0 = pagi
   index 1 = malam
====================================== */
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

/* ======================================
   RENDER TABLE
====================================== */
const tbody = document.getElementById("scheduleBody");
const searchInput = document.getElementById("searchInput");

function renderTable(data) {
  tbody.innerHTML = "";

  data.forEach(day => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${day.date}</td>
      <td>${day.SURIA88.join("<br><br>")}</td>
      <td>${day.HAKABET.join("<br><br>")}</td>
      <td>${day.VIOBET.join("<br><br>")}</td>
      <td>${day.TEMPO88.join("<br><br>")}</td>
      <td>${day.FILA88.join("<br><br>")}</td>
      <td>${day.IJOBET.join("<br><br>")}</td>
      <td>${day.HAHAWIN88.join("<br><br>")}</td>
    `;

    tbody.appendChild(tr);
  });
}

/* ======================================
   SEARCH STAFF NAME
====================================== */
function searchStaff(keyword) {
  if (!keyword) {
    renderTable(scheduleData);
    return;
  }

  const result = [];

  scheduleData.forEach(day => {
    Object.keys(day).forEach(key => {
      if (key === "date") return;

      day[key].forEach(name => {
        if (name.toLowerCase().includes(keyword.toLowerCase())) {
          result.push({
            date: day.date,
            web: key,
            name: name
          });
        }
      });
    });
  });

  tbody.innerHTML = "";

  result.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.date}</td>
      <td colspan="7">
        <strong>${item.name}</strong> — ${item.web}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

/* ======================================
   EVENT LISTENER
====================================== */
searchInput.addEventListener("input", e => {
  searchStaff(e.target.value.trim());
});

/* ======================================
   INIT
====================================== */
renderShiftList();
renderTable(scheduleData);

