import { Client, GatewayIntentBits } from "discord.js"
import needle from 'needle'

import { messageFunctions } from './functions/messages/messageKeywords.js'
const token = 'MTEyNzMxNzYyODY4ODU0Mzg3Ng.GQulcM._0toY2wenjo0FLc4hKedKH9nHAlfjUivrOGHBM'
const delay = ms => new Promise(res => setTimeout(res, ms));
const client = new Client({
    intents:[
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildEmojisAndStickers,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessageTyping,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildIntegrations,
      GatewayIntentBits.GuildWebhooks,
      GatewayIntentBits.GuildInvites,
    ]
})


needle.get('http://www.ponyisland.net', (error, response) => {

  if (!error && response.statusCode == 200)
    console.log(response.body);

})
const hasSeen = false
client.on("messageCreate", async (msg) => {
  if (msg.content.includes('has appeared!')) {
    msg.reply('cat')
    await delay(2000)
    msg.reply('wtf man this is so racist')
    hasSeen = true
  }
  if (msg.author.bot) return 
  messageFunctions(msg)
})

client.login(token)
