import { randomIntMinToMax } from "../../../../utils.js"

export const randomiseStinky = (msg) => {
  const number = randomIntMinToMax(1, 3)
  switch (number) {
    case 1:
      return msg.react('👀')
    case 2:
      return msg.react('🥸')
    case 3:
      return msg.react('🥰')
    default:
      ('noMessage')
  }
}