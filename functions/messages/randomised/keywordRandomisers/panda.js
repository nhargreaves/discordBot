import { randomIntMinToMax } from "../../../../utils.js"

export const randomisePanda = (msg) => {
  const number = randomIntMinToMax(1, 10)
  switch (number) {
    case 1:
      return msg.reply('pandaaaaaaaa')
    case 2:
      return msg.reply('panda hi!!!!!!!!!!!!!!')
    case 3:
      return msg.reply('panda panda panda')
    case 4:
      return msg.react('🐼')
    default:
      return 'noMessage'
  }
}