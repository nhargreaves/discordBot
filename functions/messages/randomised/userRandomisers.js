import { randomiseFalcor } from "./keywordRandomisers/falcor.js"
import { randomisePanda } from "./keywordRandomisers/panda.js"
import { randomisePokemon } from "./keywordRandomisers/pokemon.js"
import { randomiseSilverheart } from "./keywordRandomisers/silverheart.js"
import { randomiseStinky } from "./keywordRandomisers/stinky.js"
import { randomiseTicket } from "./keywordRandomisers/ticket.js"
import { randomiseZico } from "./keywordRandomisers/zico.js"
import { randomiseBaby } from "./keywordRandomisers/baby.js"

import { keyWords } from "./patterns/keywords.js"

export const checkRandomised = (msg, keyWord) => {
  const message = msg.content.toLowerCase()
  keyWords.map(word => {
    if (message.includes(word)) return keyWordRandomiserFetch(msg, word)
  })
}

const keyWordRandomiserFetch = (msg, keyWord) => {
  switch (keyWord) {
    case 'falcor':
      return randomiseFalcor(msg)
    case ('sil'):
      return randomiseSilverheart(msg)
    case ('panda'):
      return randomisePanda(msg)
    case ('ticket'):
      return randomiseTicket(msg)
    case ('zico'):
      return randomiseZico(msg)
    case ('stinky'):
      return randomiseStinky(msg)
    case ('pokemon'):
      return randomisePokemon(msg)
    case ('baby'):
      return randomiseBaby(msg)
    // case ('any'):
    //   return randomiseAny(msg)
    default:
      return msg.reply('zico is a stupid moron so this shit bot just broke go make fun of her')
  }
}