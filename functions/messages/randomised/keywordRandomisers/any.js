import { randomIntMinToMax } from "../../../../utils.js"

export const randomiseAny = (msg) => {
  const number = randomIntMinToMax(1, 500)
  switch (number) {
    case 1:
      return msg.reply('not very barbie of you 🖕')
    case 3:
      return msg.reply('https://en.wikipedia.org/wiki/Carbon_monoxide_poisoning')
    case 4:
      return msg.reply('^ has never felt the touch of a woman')
    case 6:
      return msg.reply('IT\'S PENIS TIME 🍆')
    case 7:
      return msg.reply('https://www.wikihow.com/Get-Your-Life-Together')
    case 8:
      return msg.reply('BTW i like barbie more than you 🖕')
    case 9:
      return msg.reply('have you seen oppenheimer btw')
    case 10:
      return msg.reply('i drew a sheep look ᏊˊꈊˋᏊ <-- sheep')
    case 11:
      return msg.reply('https://imgur.com/cpD0ODf')
    case 12:
      return msg.reply('https://ponyisland.net/#!/?src=community&sub=forums&topic=2069691')
    case 13:
      return msg.reply('47.213.125.200')
    default:
    ('noMessage')
  }
}