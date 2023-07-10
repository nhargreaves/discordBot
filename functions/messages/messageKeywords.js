import { keywordFetch } from "./helpers/userRandomisers.js"
import { runStinkyFunctions } from "./stinkyFunctions/stinkyFunctions.js"

export const messageFunctions = (msg) => {
  const message = msg.content.toLowerCase()
  if (message.startsWith('!stinky ')) {
    runStinkyFunctions(msg, message)
  } else if (message.includes('sil') && message.includes('wrong')) {
    msg.reply('>silverheart\n>wrong\npick one')
  } else if (message.includes('falcor')) {
    const falcorMsg = keywordFetch('falcor')
    if (falcorMsg !== 'noMessage') {
      msg.reply(falcorMsg)
    }
  } else if (message.includes('sil')) {
    const silverheartMsg = keywordFetch('silverheart')
    if (silverheartMsg !== 'noMessage') {
      msg.reply(silverheartMsg)
    }
  } else if (message.includes('ticket')) {
    const ticketMsg = keywordFetch('ticket')
    if (ticketMsg !== 'noMessage') {
      msg.reply(ticketMsg)
    }
  } else if (message.includes('panda')) {
    const pandaMsg = keywordFetch('panda')
    if (pandaMsg !== 'noMessage') {
      msg.reply(pandaMsg)
    }
  } else if (message.includes('cat')) {
    const catMsg = keywordFetch('cat')
    if (catMsg !== 'noMessage') {
      msg.reply(catMsg)
    }
  } else if (message === 'poketwoo') {
    msg.reply('stinkyyyyyyy')
  } else if (message.includes('zico')) {
    const zicoMsg = keywordFetch('zico')
    if (zicoMsg !== 'noMessage') {
      msg.reply(zicoMsg)
    }
  }
}
