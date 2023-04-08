// Turno de la computadora
import {
  pedirCarta,
  acumularPuntos,
  crearCartaHTML,
  determinarGanador,
} from "./";
/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<Number>} puntosJugadores puntos de la computadora
 * @param {HTMLElement} puntosHTML
 * @param {Array<String>} deck
 * @param {Element} divCartasJugadores
 */
export const turnoComputadora = (
  puntosMinimos,
  puntosJugadores,
  puntosHTML,
  deck = [],
  divCartasJugadores
) => {
  if (!puntosMinimos) throw new Error("Puntos minimos son necesarios");
  if (!puntosJugadores)
    throw new Error("Argumento puntosJugadores es necesario");

  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);
    puntosComputadora = acumularPuntos(
      puntosJugadores,
      puntosHTML,
      carta,
      puntosJugadores.length - 1
    );
    crearCartaHTML(carta, puntosJugadores.length - 1, divCartasJugadores);
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
  determinarGanador(puntosJugadores);
};
