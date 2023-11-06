import { randomIntMinToMax } from "../../../../utils.js"

export const randomiseAngryStinky = (msg) => {
  const number = randomIntMinToMax(1, 11)
  switch (number) {
    case 1:
      return msg.react('🖕')
    case 2:
      return msg.react('🔫')
    case 3:
      return msg.react('🤮')
    case 4:
      return msg.reply('stfu 🖕')
    case 5:
      return msg.reply('low effort reply')
    case 6:
      return msg.reply('K')
    case 7:
      return msg.reply('why are you like this')
    case 8:
      return msg.reply('i\'m blackpilled')
    case 9:
      return msg.reply('not even a gilf')
    case 10:
      return msg.reply('i hate you so much i\'m going to tell kraken')
    case 11:
      return msg.reply('some days i actually miss kraken')
    default:
      return 'noMessage'
  }
}