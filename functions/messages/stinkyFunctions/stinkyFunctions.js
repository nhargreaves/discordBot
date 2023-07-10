import { spawnPokemon } from "../helpers/spawnPokemon.js"

export const runStinkyFunctions = (msg, message) => {
  if (message === ('!stinky fetch poketwo')) {
    console.log('fetching')
    spawnPokemon(msg)
  }
}
