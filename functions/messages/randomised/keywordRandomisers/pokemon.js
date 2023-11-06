import { randomIntMinToMax } from "../../../../utils.js"

export const randomisePokemon = (msg) => {
  const number = randomIntMinToMax(1, 10)
  switch (number) {
    case 1:
      return msg.reply('i think you should call it joe')
    case 2:
      return msg.reply('looks like a hunter to me LOL')
    default:
      ('noMessage')
  }
}