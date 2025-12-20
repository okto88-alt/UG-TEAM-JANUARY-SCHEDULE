/*********************************
 * DATA JADWAL
 *********************************/
const scheduleData = [
  {
    date: "21-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Sindy"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Valvi"],
    HAHAWIN88: ["Andi", "Anggie", "Heno", "Alfan"],
    OFFDAY: ["Chandy", "Vindy"]
  },
  {
    date: "22-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Sindy"],
    VIOBET: ["Anggie", "Heno"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Valvi"],
    HAHAWIN88: ["Andi", "Anggie", "Heno", "Alfan"],
    OFFDAY: ["Kenny", "Kris"]
  },
  {
    date: "23-Dec-2025",
    SURIA88: ["Nibras", "Dea"],
    HAKABET: ["Andi", "Valvi"],
    VIOBET: ["Anggie", "Vindy"],
    TEMPO88: ["Firman", "Alfan"],
    FILA88: ["Angga", "Kheiren"],
    IJOBET: ["Jerry", "Kris"],
    HAHAWIN88: ["Valvi", "Alfan"],
    OFFDAY: ["Heno", "Sindy"]
  }
];

/*********************************
 * FORMATTER
 *********************************/
function formatShift(list) {
  if (!list || list.length === 0) return "-";
  return list.join("<br><br>");
}

function formatOffDay(list) {
  if (!list || list.length === 0) return "-";
  return list.join("<br>");
}

/*********************************
 * RENDER TABLE
 *********************************/
function renderTable(data) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  data.forEach(day => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td class="date-col">${day.date}</td>
      <td>${formatShift(day.SURIA88)}</td>
      <td>${formatShift(day.HAKABET)}</td>
      <td>${formatShift(day.VIOBET)}</td>
      <td>${formatShift(day.TEMPO88)}</td>
      <td>${formatShift(day.FILA88)}</td>
      <td>${formatShift(day.IJOBET)}</td>
      <td>${formatShift(day.HAHAWIN88)}</td>
      <td class="off-day">${formatOffDay(day.OFFDAY)}</td>
    `;

    tbody.appendChild(tr);
  });
}

/*********************************
 * SEARCH STAFF
 *********************************/
function searchStaff() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(keyword) ? "" : "none";
  });
}

/*********************************
 * DARK MODE TOGGLE
 *********************************/
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const btn = document.getElementById("themeToggle");
  if (document.body.classList.contains("dark-mode")) {
    btn.innerText = "☀ Light Mode";
  } else {
    btn.innerText = "🌙 Dark Mode";
  }
}

/*********************************
 * INIT
 *********************************/
document.addEventListener("DOMContentLoaded", () => {
  renderTable(scheduleData);
});
