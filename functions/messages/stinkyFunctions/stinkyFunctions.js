import { spawnPokemon } from "../helpers/spawnPokemon.js"

export const runStinkyFunctions = (msg, message) => {
  if (message.includes('!stinky')) {
    const newMessage = message.split('!stinky',)[1]
    msg.reply(newMessage)
  }
}
