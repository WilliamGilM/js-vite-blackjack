import { valorCarta } from "./";
// Turno: 0 = primer jugador y el último será la computadora
/**
 * Turno de la computadora
 * @param {Array<Number>} puntosJugadores arreglo de los putos de jugadores
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos
 * @param {String} carta carta que se obtiene del deck
 * @param {Number} turno numero de la posición del jugador en el arreglo
 * @returns {Array<Number>} retorna los puntos del jugador en la posición del arreglo
 */
export const acumularPuntos = (puntosJugadores, puntosHTML, carta, turno) => {
  puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
  puntosHTML[turno].innerText = puntosJugadores[turno];
  return puntosJugadores[turno];
};
