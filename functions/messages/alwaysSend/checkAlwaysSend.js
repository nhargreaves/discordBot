import { cats } from "./patterns/cat.js"
import { kys } from "./patterns/kys.js"

export const checkAlwaysSend = (msg, client) => {
  const message = msg.content.toLowerCase()
  // kill yourself
  kys.map(k => {
    if (message.includes(k)) {
      msg.reply('<:pandacool:1165809745131733094>')
      return
    }
  })

  // stinky treat
  if (message.includes('stinky want a treat')) {
    msg.react('👀')
    msg.reply('👀👀👀👀👀👀👀👀👀')
  }

  // zelds mum
  if (message.includes('zelds mum')) {
    msg.react('🍆')
  }

  // shleedog
  if (message.includes('fuckoffshlee')) {
    msg.react('👎')
  }

  // stupid bot
  if (message.includes('stupid bot')) {
    msg.reply('stupid human')
  }

  // killmode functions
  if (message.includes('stinky activate killmode')) {
    msg.reply('🔪 KILLMODE ACTIVATED 🔪')
  }
  if (message.includes('stinky kill ')) {
    const kill = message.split('stinky kill ')[1]
    msg.reply('🔪 KILLING ' + kill.toUpperCase() + ' 🔪')
  }
  if (message.includes('stinky deactivate killmode')) {
    msg.reply('🔪 KILLMODE DEACTIVATED 🔪')
  }
  if (message.includes('stinky do you love ')) {
    const love = message.split('stinky do you love ')[1]
    msg.reply('🔪 I AM KILLING ' + love.toUpperCase() + ' 🔪')
  }

  // sil wrong
  if (message.includes('sil') && message.includes('wrong')) {
    msg.reply('>silverheart\n>wrong\npick one')
  }

  // poketwo jealousy
  if (message.includes('poketwoo')) {
    msg.reply('stinkyyyyyyy')
  }

  // billy is a joke
  if (message.includes('billy') && message.includes('joke')) {
    msg.reply('billy is a joke')
  }

  cats.map(c => {
    if (message.includes(c)) {
      msg.reply('🐱')
      return
    }
  })

  if (message.includes('nym')) {
    msg.reply('<:ohlawd:1160017297705025536>')
  }
}
