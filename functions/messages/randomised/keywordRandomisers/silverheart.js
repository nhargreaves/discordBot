import { randomIntMinToMax } from "../../../../utils.js"

export const randomiseSilverheart = (msg) => {
  const number = randomIntMinToMax(1, 10)
  switch (number) {
    case 1:
      return msg.reply('silverheart 🤓')
    case 2:
      return msg.reply('shall we consult The System')
    case 3:
      return msg.reply('it is that way, yes')
    case 4:
      return msg.react('🤓')
    default:
      return 'noMessage'
  }
}