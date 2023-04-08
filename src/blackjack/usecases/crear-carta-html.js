/**
 * Esta función crea la carta en el HTML
 * @param {String} carta
 * @param {Number} turno
 * @param {Element} divCartasJugadores
 */
export const crearCartaHTML = (carta, turno, divCartasJugadores) => {
  if (!carta) throw new Error("La carta es un argumento obligatorio");
  const imgCarta = document.createElement("img");
  imgCarta.src = `/assets/cartas/cartas/${carta}.png`;
  imgCarta.classList.add("carta");
  divCartasJugadores[turno].append(imgCarta);
};
