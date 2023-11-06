import { randomIntMinToMax } from "../../../../utils.js"

export const randomiseFalcor = (msg) => {
  const number = randomIntMinToMax(1, 10)
  switch (number) {
    case 1:
      return msg.reply('FALCOR 🤮')
    case 2:
      return msg.reply('🤓 falcor 🤓')
    case 3:
      return msg.reply('lollll you love falcor don\'t you')
    case 4:
      return msg.react('😲')
    default:
      return 'noMessage'
  }
}