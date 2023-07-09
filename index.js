const { GatewayIntentBits } = require('discord.js')

//In bot.js
const token = "MTEyNzMxNzYyODY4ODU0Mzg3Ng.GQulcM._0toY2wenjo0FLc4hKedKH9nHAlfjUivrOGHBM" //Token that you saved in step 5 of this tutorial
const {Client, Intents} = require("discord.js")
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
  const number = randomIntMinToMax(1, 6)
  switch (number) {
    case 1:
      return 'FALCOR 🤮'
    case 2:
      return '🤓 falcor 🤓'
    case 3:
      return 'lollll you love falcor don\'t you'
    case 4:
      return '😲'
    case 5:
      return 'noMessage'
    case 6:
      return 'noMessage'
    default:
      return 'noMessage'
  }
}

const randomiseSilverheart = () => {
  const number = randomIntMinToMax(1, 6)
  switch (number) {
    case 1:
      return 'Silverheart 🤓'
    case 2:
      return 'shall we consult The System'
    case 3:
      return 'it is that way, yes'
    case 4:
      return 'noMessage'
    case 5:
      return 'noMessage'
    case 6:
      return 'noMessage'
    default:
      return 'noMessage'
  }
}

const randomisePanda = () => {
  const number = randomIntMinToMax(1, 4)
  switch (number) {
    case 1:
      return 'pandaaaaaaaa'
    case 2:
      return 'panda hi!!!!!!!!!!!!!!'
    case 3:
      return 'noMessage'
    case 4:
      return 'noMessage'
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
    case 3:
      return 'noMessage'
    default:
      return 'noMessage'
  }
}

const randomiseCat = () => {
  const number = randomIntMinToMax(1, 11)
  switch (number) {
    case 1:
      return 'but no love for stinky ok :('
    case 2:
      return 'whatever i don\'t even care'
    case 3:
      return 'K'
    case 4:
      return 'noMessage'
    case 5:
      return 'noMessage'
    case 6:
      return 'noMessage'
    case 7:
      return 'noMessage'
    case 8:
      return 'noMessage'
    case 9:
      return 'noMessage'
    case 10:
      return 'noMessage'
    case 11:
      return 'noMessage'
    default:
      return 'noMessage'
  }
}

const randomiseZico = () => {
  const number = randomIntMinToMax(1, 11)
  switch (number) {
    case 1:
      return 'more like pido amirite LOL\nbecause pedo get it\nLOL'
    case 2:
      return '🖕'
    case 3:
      return 'just kidding zico is a great guy\n🖕'
    case 4:
      return 'noMessage'
    case 5:
      return '8==================D'
    case 6:
      return 'fuck zico lmao'
    case 7:
      return 'piiiiiiido'
    case 8:
      return 'noMessage'
    case 9:
      return 'noMessage'
    case 10:
      return 'noMessage'
    case 11:
      return 'noMessage'
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
      console.log('panda')
      return randomisePanda()
    case ('ticket'):
      console.log('basic ticket')
      return randomiseTicket()
    // case ('cat'):
    //   return randomiseCat()
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
  // } else if (message.includes('cat')) {
  //   msg.reply('WHATEVERRRR PEDO')
  } else if (message === 'poketwo') {
    msg.reply('u want him so bad lol')
  } else if (message.includes('zico')) {
    const zicoMsg = keywordFetch('zico')
    if (zicoMsg !== 'noMessage') {
      msg.reply(zicoMsg)
    }
  }
})

client.login(token)
