const calendario = document.querySelector(".calendario"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".dias"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  hoyBtn = document.querySelector(".hoy-btn"),
  gotoBtn = document.querySelector(".goto-btn"),
  dateInput = document.querySelector(".date-input");

let hoy = new Date();
let diaActivo;
let mes = hoy.getMonth();
let year = hoy.getFullYear();

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

// Función para añadir los días
function initCalendar() {
  const firstDay = new Date(year, mes, 1);
  const lastDay = new Date(year, mes + 1, 0);
  const prevLastDay = new Date(year, mes, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const dia = firstDay.getDay(); // Cambiado de getDate() a getDay()
  const nextDays = 7 - lastDay.getDay() - 1; // Ajustado el cálculo de nextDays

  // Se actualiza el mes
  date.innerHTML = `${meses[mes]} ${year}`;

  // Se añaden los días
  let dias = "";

  // Días previos
  const primerDia = dia === 0 ? 6 : dia - 1;
  for (let i = primerDia; i > 0; i--) {
    dias += `<div class="dia prev" >${prevDays - i + 1}</div>`;
  }

  // Días del mes
  for (let i = 1; i <= lastDate; i++) {
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      mes === new Date().getMonth()
    ) {
      dias += `<div class="dia hoy">${i}</div>`;
    } else {
      dias += `<div class="dia">${i}</div>`;
    }
  }

  // Días del siguiente mes

  const ultimoDiaSemana = lastDay.getDay();
  const diasRestantes = ultimoDiaSemana === 0 ? 0 : 7 - ultimoDiaSemana;
  for (let i = 1; i <= diasRestantes; i++) {
    dias += `<div class="dia next">${i}</div>`;
  }

  daysContainer.innerHTML = dias;
}

initCalendar();

// Mes anterior
function mesPrev() {
  mes--;
  if (mes < 0) {
    mes = 11;
    year--;
  }
  initCalendar();
}

// Mes siguiente
function mesNext() {
  mes++;
  if (mes > 11) {
    mes = 0;
    year++;
  }
  initCalendar();
}

// Eventos para controlar el cambio de mes
prev.addEventListener("click", mesPrev);
next.addEventListener("click", mesNext);

// Funcionalidad de los botones
//boton para ir al dia de hoy
hoyBtn.addEventListener("click", () => {
  hoy = new Date();
  mes = hoy.getMonth();
  year = hoy.getFullYear();
  initCalendar();
});

dateInput.addEventListener("keyup", (e) => {
  dateInput.value = dateInput.value.replace(/[^0-9/]/g, ""); //hace que solo permita números
  if (dateInput.value.length == 2) {
    dateInput.value += "/"; //añade una barrica al introducir dos numeros para el mes
  }
  if (dateInput.value.length > 7) {
    dateInput.value = dateInput.value.slice(0, 7); //solo permite 7 caracteres contando la barrica 12/4567 mm/yyyy
  }
});

gotoBtn.addEventListener("click", irFecha);

function irFecha() {
  const fecha = dateInput.value.split("/");
  if (fecha.length == 2) {
    if (fecha[0] > 0 && fecha[0] < 13 && fecha[1].length == 4) {
      //si el mes esta entre 1 y 12 y si el año tiene 4 caracteres
      mes = fecha[0] - 1;
      year = fecha[1];
      initCalendar();
      return;
    }
  }
  alert("Fecha incorrecta");
}