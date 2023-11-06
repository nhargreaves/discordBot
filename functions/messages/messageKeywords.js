// import { keywordFetch } from "./randomised/userRandomisersOLD.js"
// import { runStinkyFunctions } from "./stinkyFunctions/stinkyFunctions.js"
// // import { randomiseAny } from "./stinkyFunctions.js"
// import { randomIntMinToMax } from '../../utils.js'

export const zicoMessageFunctions = (msg, client) => {
  let message = msg.content.toLowerCase()
  if (msg.channel.name === 'pokemon' && message.includes('name')) {
    console.log('pokemon')
    const pokeMsg = keywordFetch(msg, 'pokemon')
    if (!pokeMsg === 'noMessage') {
     return pokeMsg
    }
  }
  // if (message.includes('stinky want a treat')) {
  //   msg.react('👀')
  //   msg.reply('👀👀👀👀👀👀👀👀👀')
  // }
  // if (message.includes('zelds mum')) {
  //   msg.react('🍆')
  // }
  if (message.includes('astarion')) {
    const random = randomIntMinToMax(1, 10)
    if (random === 1) {
      msg.reply('christ here we go again')
    }
  }
  // if (message.includes('fuckoffshlee')) {
  //   msg.react('👎')
  // }
  // if (message.includes('stupid bot')) {
  //   msg.reply('stupid human')
  // }
  // if (message.includes('stinky activate killmode')) {
  //   msg.reply('🔪 KILLMODE ACTIVATED 🔪')
  // }
  // if (message.includes('stinky kill ')) {
  //   const kill = message.split('stinky kill ')[1]
  //   msg.reply('🔪 KILLING ' + kill.toUpperCase() + ' 🔪')
  // }
  // if (message.includes('stinky deactivate killmode')) {
  //   msg.reply('🔪 KILLMODE DEACTIVATED 🔪')
  // }
  // if (message.includes('stinky do you love ')) {
  //   const love = message.split('stinky do you love ')[1]
  //   msg.reply('🔪 I AM KILLING ' + love.toUpperCase() + ' 🔪')
  // }
  if (message.includes('stinky say')) {
    let intRepeat = 1
    let responseMessage = msg.content.split('stinky say ')[1]

    if (message.includes('you')) {
      console.log('includes you')
      message = message.replace('you', 'i')
      console.log('new message', message)
    } else if (message.includes(' i  ')) {
      message = message.replace('i ', 'you ')
    }
    if (message.includes (' times')) {
      let repeat = message.split(' times')[0]
      repeat = repeat.split(' ')
      repeat = repeat.pop()
      intRepeat = parseInt(repeat)
      if (intRepeat > 10) {
        msg.reply('no man i\'ll get fucking banned')
        return
      }
      responseMessage = responseMessage.split(' ' + repeat)[0]
    }
    for (let i = 0; i < intRepeat; i++) {
      msg.reply(responseMessage)
    }
  }
  if (message.startsWith('!stinky ')) {
    runStinkyFunctions(msg, message)
  // } else if (message.includes('sil') && message.includes('wrong')) {
  //   console.log('sil wrong')
  //   msg.reply('>silverheart\n>wrong\npick one')
  } else if (message.includes('falcor')) {
    const falcorMsg = keywordFetch(msg, 'falcor')
    if (!falcorMsg === 'noMessage') {
     return falcorMsg
    }
  // } else if (message.includes('oppenheimer')) {
  //   const falcorMsg = keywordFetch(msg, 'oppenheimer')
  //   if (!falcorMsg === 'noMessage') {
  //    return falcorMsg
  //   }
  } else if (message.includes('sil')) {
    const silverheartMsg = keywordFetch(msg, 'silverheart')
    console.log('sil')
    if (!silverheartMsg === ('noMessage')) {
      return silverheartMsg
    }
  } else if (message.includes('ticket')) {
    console.log('ticket')
    const ticketMsg = keywordFetch(msg, 'ticket')
    if (ticketMsg === ('noMessage')) {
      return ticketMsg
    }
  } else if (message.includes('panda')) {
    console.log('panda')
    const pandaMsg = keywordFetch(msg, 'panda')
    if (!pandaMsg === ('noMessage')) {
      return pandaMsg
    }
  // } else if (message === 'poketwoo') {
  //   console.log('poketwoo')
  //   msg.reply('stinkyyyyyyy')
  } else if (message.includes('zico')) {
    console.log('zico')
    const zicoMsg = keywordFetch(msg, 'zico')
    if (!zicoMsg === ('noMessage')) {
      return zicoMsg
    }
  }  else if (message.includes('congratulations')) {
    console.log('congrats')
    const zicoMsg = keywordFetch(msg, 'angryStinky')
    if (!zicoMsg === ('noMessage')) {
      return zicoMsg
    }
  } else if (message.includes('stinky') && message.includes('baby')) {
    console.log('babystinky')
    return keywordFetch(msg, 'babyStinky')
  }  else if (message.includes('baby')) {
    console.log('baby')
    const zicoMsg = keywordFetch(msg, 'baby')
    if (!zicoMsg === ('noMessage')) {
      return zicoMsg
    }
  }  else if (msg.author.username.includes('mash')) {
    const zicoMsg = keywordFetch(msg, 'angryStinky')
    if (!zicoMsg === ('noMessage')) {
      return zicoMsg
    }
  } else if (msg.author.username.includes('kraken') || msg.author.username.includes('dalssex') || message.includes('sunneh')) {
    console.log('specific')
    const zicoMsg = keywordFetch(msg, 'angryStinky')
    if (!zicoMsg === ('noMessage')) {
      return zicoMsg
    }
  // } else if (message.includes('billy') && message.includes('joke')) {
  //   console.log('billy joke')
  //   msg.reply('billy is a joke')
  // } else if (message.includes('ciel') || message.includes('miette')) {
  //   msg.react('🐱')
  } else if (msg.author.username.includes('audddssie')) {
    console.log('aussie')
    const randomised = randomIntMinToMax(1, 20)
    if (randomised === 2) {
      msg.reply('listen to billy')
    }
    if (randomised === 3) {
      msg.reply('the king has arrived')
    }
    if (randomised === 4) {
      msg.reply('so true billy')
    }
    if (randomised === 5) {
      msg.reply('so barbie of you my lord')
    }
    if (randomised === 6) {
      msg.reply('dominating as usual sir')
    }
    if (randomised === 7) {
      msg.reply('i just love this guy')
    }
    if (randomised === 8) {
      msg.reply('BILLY TIME')
    }
    if (randomised === 9) {
      msg.reply('okay nobody read this except billy please. billy we are like if horses could ride other horses')
    }
    if (randomised === 10) {
      msg.reply('bee glerp prrrr <- message in our secret code billy')
    }
    if (randomised === 11) {
      msg.reply('kangaroo aye cobber')
    }
  // } else if (message.includes('miette') || message.includes('ciel')) {
  //   console.log('cats')
  //   msg.react('🐱')
  } else if (message.includes('barbie')) {
    console.log('barbie')
    const barbieMsg = keywordFetch(msg, 'barbie')
    if (barbieMsg === ('noMessage')) {
      return barbieMsg
    }
  } else if (message.includes('stinky')) {
    console.log('stinky')
    const stinkyMsg = keywordFetch(msg, 'stinky')
    if (!stinkyMsg === ('noMessage')) {
      return stinkyMsg
    }
  }
  // } else {
  //   const anyMsg = keywordFetch(msg, 'any')
  //   console.log('any')
  //   if (!anyMsg === ('noMessage')) {
  //     return randomiseAny(msg)
  //   }
  // }
}
