import _ from "underscore";
// import crearDeck, { miNombre } from "./usecases/crear-deck";
// Exportacion independiente con destructuracion
// import { crearDeck as crearNuevoDeck } from "./usecases/crear-deck";
import {
  crearDeck,
  pedirCarta,
  valorCarta,
  turnoComputadora,
  acumularPuntos,
  crearCartaHTML,
} from "./usecases";
// let va cambiar los valores
// const no cambia los valores

// Patrón módulo
let deck = [];
const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "K", "Q"];

let puntosJugadores = [];

// Referencias del HTML
const btnPedir = document.querySelector("#btnPedir"),
  btnDetener = document.querySelector("#btnDetener"),
  btnNuevo = document.querySelector("#btnNuevo");

const divCartasJugadores = document.querySelectorAll(".divCartas"),
  puntosHTML = document.querySelectorAll("small");

// Esta función inicializa el juego
const inicializarJuego = (numJugadores = 2) => {
  deck = crearDeck(tipos, especiales);
  puntosJugadores = [];
  for (let i = 0; i < numJugadores; i++) {
    puntosJugadores.push(0);
  }

  puntosHTML.forEach((elem) => (elem.innerText = 0));
  divCartasJugadores.forEach((elem) => (elem.innerHTML = ""));
  btnPedir.disabled = false;
  btnDetener.disabled = false;
};

// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta(deck);
  const puntosJugador = acumularPuntos(puntosJugadores, puntosHTML, carta, 0);
  crearCartaHTML(carta, 0, divCartasJugadores);

  if (puntosJugador > 21) {
    console.warn("Lo siento mucho, perdiste");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(
      puntosJugador,
      puntosJugadores,
      puntosHTML,
      deck,
      divCartasJugadores
    );
  } else if (puntosJugador === 21) {
    console.warn("21, genial!");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(
      puntosJugador,
      puntosJugadores,
      puntosHTML,
      deck,
      divCartasJugadores
    );
  }
});

// Detener
btnDetener.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;
  turnoComputadora(
    puntosJugadores[0],
    puntosJugadores,
    puntosHTML,
    deck,
    divCartasJugadores
  );
});

// Nuevo Juego
btnNuevo.addEventListener("click", () => {
  inicializarJuego();
});
