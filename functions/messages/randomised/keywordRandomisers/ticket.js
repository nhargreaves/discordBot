import { randomIntMinToMax } from "../../../../utils.js"

export const randomiseTicket = (msg) => {
  const number = randomIntMinToMax(1, 2)
  switch (number) {
    case 1:
      return msg.reply('lol are you a moderator 🤓')
    case 2:
      return msg.reply('whoaaa important my little pony site user coming through 🤓🤓')
    default:
      return 'noMessage'
  }
}