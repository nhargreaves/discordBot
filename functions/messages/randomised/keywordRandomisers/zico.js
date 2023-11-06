import { randomIntMinToMax } from "../../../../utils.js"

export const randomiseZico = (msg) => {
  const number = randomIntMinToMax(1, 9)
  switch (number) {
    case 2:
      return msg.reply('🖕')
    case 5:
      return msg.reply('8==================D')
    default:
      ('noMessage')
  }
}