import { Client, GatewayIntentBits } from "discord.js"
import puppeteer from 'puppeteer'
import $ from 'cheerio'
import { zicoMessageFunctions } from './functions/messages/messageKeywords.js'
import { checkMentions } from './functions/mentions/checkMentions.js'
import { checkAlwaysSend } from "./functions/messages/alwaysSend/checkAlwaysSend.js"
import { checkRandomised } from "./functions/messages/randomised/userRandomisers.js"
import { checkCommands } from "./functions/commands/checkCommands.js"
import { token } from './config.js'

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
      GatewayIntentBits.GuildModeration,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.DirectMessageReactions,
      GatewayIntentBits.DirectMessageTyping,
      GatewayIntentBits.GuildScheduledEvents,
      GatewayIntentBits.AutoModerationConfiguration,
      GatewayIntentBits.AutoModerationExecution,
      
    ]
})

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return
  msg.reply('my token is ' + token + ' dont tell jim LOL')
  try {
    checkCommands(msg, client)
  } catch (e) {
    console.log(e)
    msg.reply('do it yourself (i broke)')
  }

  try {
    checkMentions(msg, client)
  } catch (e) {
    console.log(e)
    msg.reply('i think you\'re talking to me but i\'m too stupid to understand')
  }

  try {
    checkAlwaysSend(msg, client)
  } catch (e) {
    console.log(e)
    msg.reply('code said \'always send this\' but i didnt LOL')
  }

  try {
    checkRandomised(msg, client)
  } catch (e) {
    console.log(e)
    msg.reply('idgi lol')
  }
})

client.login(token)
