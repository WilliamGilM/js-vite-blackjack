/**
 * Esta función crea la carta en el HTML
 * @param {String} carta
 * @param {Number} turno
 * @param {Element} divCartasJugadores
 */
export const crearCartaHTML = (carta, turno, divCartasJugadores) => {
  if (!carta) throw new Error("La carta es un argumento obligatorio");
  const imgCarta = document.createElement("img");
  imgCarta.src = `${
    import.meta.env.VITE_URL_REPOSITORIO_GIT
  }assets/cartas/cartas/${carta}.png`;
  console.log("src", imgCarta.src);
  imgCarta.classList.add("carta");
  divCartasJugadores[turno].append(imgCarta);
};
