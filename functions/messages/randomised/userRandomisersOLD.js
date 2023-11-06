import { randomIntMinToMax } from '../../../utils.js'

export const keywordFetch = (msg, keyWord) => {
  switch (keyWord) {
    case 'falcor':
      return randomiseFalcor(msg)
    case ('silverheart'):
      return randomiseSilverheart(msg)
    case ('panda'):
      return randomisePanda(msg)
    case ('ticket'):
      return randomiseTicket(msg)
    case ('cat'):
      return randomiseCat(msg)
    case ('zico'):
      return randomiseZico(msg)
    case ('stinky'):
      return randomiseStinky(msg)
    case ('pokemon'):
      return randomisePokemon(msg)
    case ('babyStinky'):
      return randomiseBabyStinky(msg)
    case ('baby'):
      return randomiseBaby(msg)
    case ('angryStinky'):
      return randomiseAngryStinky(msg)
    case ('barbie'):
      return randomiseBarbie(msg)
    // case ('any'):
    //   return randomiseAny(msg)
    default:
      return msg.reply('zico is a stupid moron coder so this shit bot just broke go make fun of her')
  }
}

const randomiseBarbie = (msg) => {
  const number = randomIntMinToMax(1, 10)
  switch (number) {
    case 1:
      return msg.reply('oh so you\'re into that feminism thing')
    case 4:
      return msg.reply('come on barbie lets go party ')
    case 2:
      return msg.reply('barbinky ε(´｡•᎑•`)っ 💕')
    case 3:
      return msg.reply('will someone go and see barbie with me please though') 
    case 5:
      return msg.reply('can we consult this with kraken') 
    default:
      return 'noMessage'
  }
}

const randomiseBabyStinky = (msg) => {
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

const randomiseBaby = (msg) => {
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

// const randomiseAngryStinky = (msg) => {
//   const number = randomIntMinToMax(1, 11)
//   switch (number) {
//     case 1:
//       return msg.react('🖕')
//     case 2:
//       return msg.react('🔫')
//     case 3:
//       return msg.react('🤮')
//     case 4:
//       return msg.reply('stfu 🖕')
//     case 5:
//       return msg.reply('low effort reply')
//     case 6:
//       return msg.reply('K')
//     case 7:
//       return msg.reply('why are you like this')
//     case 8:
//       return msg.reply('i\'m blackpilled')
//     case 9:
//       return msg.reply('not even a gilf')
//     case 10:
//       return msg.reply('i hate you so much i\'m going to tell kraken')
//     case 11:
//       return msg.reply('some days i actually miss kraken')
//     default:
//       return 'noMessage'
//   }
// }

// const randomiseFalcor = (msg) => {
//   const number = randomIntMinToMax(3, 20)
//   switch (number) {
//     case 1:
//       return msg.reply('FALCOR 🤮')
//     case 2:
//       return msg.reply('🤓 falcor 🤓')
//     case 3:
//       return msg.reply('lollll you love falcor don\'t you')
//     case 4:
//       return msg.react('😲')
//     default:
//       return 'noMessage'
//   }
// }

// const randomiseSilverheart = (msg) => {
//   const number = randomIntMinToMax(1, 50)
//   switch (number) {
//     case 1:
//       return msg.reply('silverheart 🤓')
//     case 2:
//       return msg.reply('shall we consult The System')
//     case 3:
//       return msg.reply('it is that way, yes')
//     case 4:
//       return msg.react('🤓')
//     default:
//       return 'noMessage'
//   }
// }

// const randomisePanda = (msg) => {
//   const number = randomIntMinToMax(1, 10)
//   switch (number) {
//     case 1:
//       return msg.reply('pandaaaaaaaa')
//     case 2:
//       return msg.reply('panda hi!!!!!!!!!!!!!!')
//     case 3:
//       return msg.reply('panda panda panda')
//     case 4:
//       return msg.react('🐼')
//     default:
//       return 'noMessage'
//   }
// }

// const randomiseTicket = (msg) => {
//   const number = randomIntMinToMax(1, 3)
//   switch (number) {
//     case 1:
//       return msg.reply('lol are you a moderator 🤓')
//     case 2:
//       return msg.reply('whoaaa important my little pony site user coming through 🤓🤓')
//     default:
//       return 'noMessage'
//   }
// }

// const randomiseCat = (msg) => {
//   const number = randomIntMinToMax(1, 3)
//   switch (number) {
//     case 2:
//       return msg.react('🖕')
//     case 3:
//       return msg.react('🇰')
//     default:
//       return 'noMessage'
//   }
// }

// const randomiseZico = (msg) => {
//   const number = randomIntMinToMax(1, 9)
//   switch (number) {
//     case 2:
//       return msg.reply('🖕')
//     case 5:
//       return msg.reply('8==================D')
//     default:
//       ('noMessage')
//   }
// }

// const randomiseStinky = (msg) => {
//   const number = randomIntMinToMax(1, 3)
//   switch (number) {
//     case 1:
//       return msg.react('👀')
//     case 2:
//       return msg.react('🥸')
//     case 3:
//       return msg.react('🥰')
//     default:
//       ('noMessage')
//   }
// }

// const randomisePokemon = (msg) => {
//   const number = randomIntMinToMax(1, 10)
//   console.log('hello')
//   switch (number) {
//     case 1:
//       return msg.reply('i think you should call it joe')
//     case 2:
//       return msg.reply('looks like a hunter to me LOL')
//     default:
//       ('noMessage')
//   }
// }

// const randomiseAny = (msg) => {
//   const number = randomIntMinToMax(1, 500)
//   switch (number) {
//     case 1:
//       return msg.reply('not very barbie of you 🖕')
//     case 3:
//       return msg.reply('https://en.wikipedia.org/wiki/Carbon_monoxide_poisoning')
//     case 4:
//       return msg.reply('^ has never felt the touch of a woman')
//     case 6:
//       return msg.reply('IT\'S PENIS TIME 🍆')
//     case 7:
//       return msg.reply('https://www.wikihow.com/Get-Your-Life-Together')
//     case 8:
//       return msg.reply('BTW i like barbie more than you 🖕')
//     case 9:
//       return msg.reply('have you seen oppenheimer btw')
//     case 10:
//       return msg.reply('i drew a sheep look ᏊˊꈊˋᏊ <-- sheep')
//     case 11:
//       return msg.reply('https://imgur.com/cpD0ODf')
//     case 12:
//       return msg.reply('https://ponyisland.net/#!/?src=community&sub=forums&topic=2069691')
//     case 13:
//       return msg.reply('47.213.125.200')
//     default:
//     ('noMessage')
//   }
// }