import { randomIntMinToMax } from "../../../../utils.js"

export const randomiseBaby = (msg) => {
  const message = msg.content.toLowerCase()
  if (message.includes('stinky')) {
    const number = randomIntMinToMax(1, 4)
    switch (number) {
      case 1:
        return msg.reply('!!!!! ε(´｡•᎑•`)っ 💕')
      case 2:
        return msg.reply('hehe baby stinky!!!!!!')
      case 3:
        return msg.reply('stinky is the baby!!!!!!')
      case 4:
        return msg.reply('no YOU\'re the baby!!! ฅ^•ﻌ•^ฅ')
    }
  }

  const number = randomIntMinToMax(1, 3)
  switch (number) {
    case 1:
      return msg.reply('I\'M the baby')
    case 2:
      return msg.reply('baby STINKY >:(')
    default:
      msg.reply('i\'m not going to say it this time')
      return msg.reply('(ʘ‿ʘ✿)')
  }
}
