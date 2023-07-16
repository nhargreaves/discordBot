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
    case ('baby'):
      return randomiseBaby(msg)
    case ('angryStinky'):
      return randomiseAngryStinky(msg)
    case ('any'):
      return randomiseAny(msg)
    default:
      return msg.reply('zico is a stupid moron coder so this shit bot just broke go make fun of her')
  }
}

const randomiseBaby = (msg) => {
  const number = randomIntMinToMax(1, 5)
  switch (number) {
    case 1:
      return msg.reply('I\'M the baby')
    default:
      return 'noMessage'
  }
}

const randomiseAngryStinky = (msg) => {
  const number = randomIntMinToMax(1, 5)
  switch (number) {
    case 1:
      return msg.react('🖕')
    case 2:
      return msg.react('🔫')
    default:
      return 'noMessage'
  }
}

const randomiseFalcor = (msg) => {
  const number = randomIntMinToMax(1, 5)
  switch (number) {
    case 1:
      return msg.reply('FALCOR 🤮')
    case 2:
      return msg.reply('🤓 falcor 🤓')
    case 3:
      return msg.reply('lollll you love falcor don\'t you')
    case 4:
      return msg.reply('😲')
    case 5:
      return msg.react('😄')
    default:
      return 'noMessage'
  }
}

const randomiseSilverheart = (msg) => {
  const number = randomIntMinToMax(1, 10)
  switch (number) {
    case 1:
      return msg.reply('silverheart 🤓')
    case 2:
      return msg.reply('shall we consult The System')
    case 3:
      return msg.reply('it is that way, yes')
    default:
      return 'noMessage'
  }
}

const randomisePanda = (msg) => {
  const number = randomIntMinToMax(1, 3)
  switch (number) {
    case 1:
      return msg.reply('pandaaaaaaaa')
    case 2:
      return msg.reply('panda hi!!!!!!!!!!!!!!')
    case 3:
      return msg.reply('panda panda panda')
    default:
      return 'noMessage'
  }
}

const randomiseTicket = (msg) => {
  const number = randomIntMinToMax(1, 3)
  switch (number) {
    case 1:
      return msg.reply('lol are you a moderator 🤓')
    case 2:
      return msg.reply('whoaaa important my little pony site user coming through 🤓🤓')
    default:
      return 'noMessage'
  }
}

const randomiseCat = (msg) => {
  const number = randomIntMinToMax(1, 3)
  switch (number) {
    case 2:
      return msg.react('🖕')
    case 3:
      return msg.react('🇰')
    default:
      return 'noMessage'
  }
}

const randomiseZico = (msg) => {
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

const randomiseStinky = (msg) => {
  const number = randomIntMinToMax(1, 2)
  switch (number) {
    case 1:
      return msg.react('👀')
    case 2:
      return msg.react('🥸')
    case 2:
      return msg.react('🥰')
    default:
      ('noMessage')
  }
}

const randomisePokemon = (msg) => {
  const number = randomIntMinToMax(1, 2)
  console.log('hello')
  switch (number) {
    case 1:
      return msg.reply('i think you should call it joe')
    case 2:
      return msg.react('looks like a hunter to me LOL')
    default:
      ('noMessage')
  }
}

const randomiseAny = (msg) => {
  const number = randomIntMinToMax(1, 50)
  switch (number) {
    case 1:
      return msg.reply('stfu 🖕')
    default:
      ('noMessage')
  }
}