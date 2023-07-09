const token = "MTEyNzMxNzYyODY4ODU0Mzg3Ng.GQulcM._0toY2wenjo0FLc4hKedKH9nHAlfjUivrOGHBM"

const {Client, GatewayIntentBits} = require("discord.js")
const client = new Client({
    intents:[
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent
    ]
})

const randomIntMinToMax = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomiseFalcor = () => {
  const number = randomIntMinToMax(1, 10)
  switch (number) {
    case 1:
      return 'FALCOR 🤮'
    case 2:
      return '🤓 falcor 🤓'
    case 3:
      return 'lollll you love falcor don\'t you'
    case 4:
      return '😲'
    default:
      return 'noMessage'
  }
}

const randomiseSilverheart = () => {
  const number = randomIntMinToMax(1, 6)
  switch (number) {
    case 1:
      return 'silverheart 🤓'
    case 2:
      return 'shall we consult The System'
    case 3:
      return 'it is that way, yes'
    default:
      return 'noMessage'
  }
}

const randomisePanda = () => {
  const number = randomIntMinToMax(1, 6)
  switch (number) {
    case 1:
      return 'pandaaaaaaaa'
    case 2:
      return 'panda hi!!!!!!!!!!!!!!'
    case 3:
      return 'panda panda panda'
    default:
      return 'noMessage'
  }
}

const randomiseTicket = () => {
  console.log('hello ticket')
  const number = randomIntMinToMax(1, 3)
  console.log('ticket ofun')
  switch (number) {
    case 1:
      return 'lol are you a moderator 🤓'
    case 2:
      return 'whoaaa important my little pony site user coming through 🤓🤓'
    default:
      return 'noMessage'
  }
}

const randomiseCat = () => {
  const number = randomIntMinToMax(1, 11)
  switch (number) {
    // case 1:
    //   return 'but no love for stinky ok :('
    case 2:
      return 'whatever i don\'t even care'
    case 3:
      return 'K'
    default:
      return 'noMessage'
  }
}

const randomiseZico = () => {
  const number = randomIntMinToMax(1, 9)
  switch (number) {
    case 2:
      return '🖕'
    case 5:
      return '8==================D'
    default:
      ('noMessage')
  }
}

const keywordFetch = (keyWord) => {
  switch (keyWord) {
    case 'falcor':
      return randomiseFalcor()
    case ('silverheart'):
      return randomiseSilverheart()
    case ('panda'):
      return randomisePanda()
    case ('ticket'):
      return randomiseTicket()
    case ('cat'):
      return randomiseCat()
    case ('zico'):
      return randomiseZico()
    default:
      console
      return 'zico is a stupid moron coder so this shit bot just broke go make fun of her'
  }
}

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return
  const message = msg.content.toLowerCase()

  if (message.includes('sil') && message.includes('wrong')) {
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
    msg.reply('stinkycaaaat')
  } else if (message.includes('zico')) {
    const zicoMsg = keywordFetch('zico')
    if (zicoMsg !== 'noMessage') {
      msg.reply(zicoMsg)
    }
  }
})

client.login(token)
