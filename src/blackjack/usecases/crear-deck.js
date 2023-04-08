import _ from "underscore";
// Exportacion individual
// export const miNombre = "william";

/**
 * Esta función crea una nuevo deck
 * @param {Array<String>} tipoDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "K", "Q"]
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("TiposDeCarta es obligatorio como un arreglo de string");

  if (!tiposEspeciales || tiposEspeciales.length === 0)
    throw new Error("TiposEspeciales es obligatorio como un arreglo de string");

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposDeCarta) {
    for (let especial of tiposEspeciales) {
      deck.push(especial + tipo);
    }
  }
  // Ordena aleatoriamente el deck
  return _.shuffle(deck);
};

// Exportacion por defecto
// export default crearDeck;
