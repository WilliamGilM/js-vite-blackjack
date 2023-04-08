/**
 * Esta función obtiene el mensaje del ganador
 * @param {Array<Number>} puntosJugadores arreglo de los puntos de los jugadores
 */
export const determinarGanador = (puntosJugadores) => {
  const [puntosMinimos, puntosComputadora] = puntosJugadores;
  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador gana");
    } else {
      alert("Computadora gana");
    }
  }, 10);
};
