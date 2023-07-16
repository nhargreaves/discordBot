import { keywordFetch } from "./helpers/userRandomisers.js"
import { runStinkyFunctions } from "./stinkyFunctions/stinkyFunctions.js"
// import { randomiseAny } from "./stinkyFunctions.js"

export const zicoMessageFunctions = (msg) => {
  const message = msg.content.toLowerCase()
  if (msg.channel.name === 'pokemon' && message.includes('name')) {
    const pokeMsg = keywordFetch(msg, 'pokemon')
    if (!pokeMsg === 'noMessage') {
     return pokeMsg
    }
  }
  if (message.startsWith('!stinky ')) {
    runStinkyFunctions(msg, message)
  } else if (message.includes('sil') && message.includes('wrong')) {
    msg.reply('>silverheart\n>wrong\npick one')
  } else if (message.includes('ticket')) {
    const ticketMsg = keywordFetch(msg, 'ticket')
    if (ticketMsg === ('noMessage')) {
      return ticketMsg
    }
  } else if (message.includes('panda')) {
    const pandaMsg = keywordFetch(msg, 'panda')
    if (!pandaMsg === ('noMessage')) {
      return pandaMsg
    }
  } else if (message === 'cat') {
    const catMsg = keywordFetch(msg, 'cat')
    if (!catMsg === ('noMessage')) {
      return catMsg
    }
  } else if (message === 'poketwoo') {
    msg.reply('stinkyyyyyyy')
  } else if (message.includes('zico')) {
    const zicoMsg = keywordFetch(msg, 'zico')
    if (!zicoMsg === ('noMessage')) {
      return zicoMsg
    }
  } else if (message.includes('stinky')) {
    const stinkyMsg = keywordFetch(msg, 'stinky')
    if (!stinkyMsg === ('noMessage')) {
      return stinkyMsg
    }
  }  else if (message.includes('baby' || 'bb' || 'bby')) {
    const zicoMsg = keywordFetch(msg, 'baby')
    if (!zicoMsg === ('noMessage')) {
      return zicoMsg
    }
  }  else if (message.includes('congratulations')) {
    const zicoMsg = keywordFetch(msg, 'angryStinky')
    if (!zicoMsg === ('noMessage')) {
      return zicoMsg
    }
  } else if (msg.author.username.includes('Kraken')) {
    msg.react('🖕')
  } else if (msg.author.username.includes('Billy')) {
    const randomised = randomIntMinToMax(1, 5)
    if (randomised === 1) {
      msg.react('🇧')
      msg.react('🇮')
      msg.react('🇱')
      msg.react('🇱')
      msg.react('🇾')
      msg.react('🇹')
      msg.react('🇮')
      msg.react('🇲')
      msg.react('🇪')
    }
  } else {
    const anyMsg = keywordFetch(msg, 'any')
    if (!anyMsg === ('noMessage')) {
      return randomiseAny(msg)
    }
  }
}
