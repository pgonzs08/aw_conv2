/**
 * Módulo para realizar consultas a la API REST utilizando la API Fetch.
 *
 * @module rest-api
 */

// TODO: ** LABORATORIO 08: Ejercicio 3 **
// Modificar URL base
/**
 * URL base de la API REST.
 */
const baseURL = "/api/eventCity";

// ------------------------------------------------------------------
// OPERACIONES SOBRE LA API REST
// ------------------------------------------------------------------

/**
 * Busca todos aquellos Pokémon cuyo nombre contenga un valor dado.
 *
 * @param {string} query Nombre del Pokémon a buscar.
 * @returns {Promise<Response>} Posible resultado de la operación asíncrona.
 */
const searchPokemonByName = (query) => {
  // Petición: GET /api/pokemon?search={query}
  return fetch(`${baseURL}?search=${query}`, { method: "GET" });
};

/**
 * Crea un nuevo Pokémon con los datos especificados.
 *
 * @param {FormData} data Datos del Pokémon a enviar.
 * @returns {Promise<Response>} Posible resultado de la operación asíncrona.
 */
const createUser = (data) => {

  return fetch(baseURL, {
    method: "POST",
    // TODO: ** LABORATORIO 08: Ejercicio 3 **
    // Enviar los datos como un JSON
    body: data
  });
}

/**
 * Elimina un Pokémon específico a partir de su identificador.
 *
 * @param {string} query Identificador del Pokémon.
 * @returns {Promise<Response>} Posible resultado de la operación asíncrona.
 */
const deletePokemonById = (query) => {
  // Petición: DELETE /api/pokemon/{id}
  return fetch(`${baseURL}/${query}`, { method: "DELETE" });
}

// Exportar características
export { searchPokemonByName, createPokemon, deletePokemonById };

// Mostrar por consola que el módulo ha sido cargado con éxito
console.log("Módulo rest-api cargado con éxito.");