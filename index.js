import { Client, GatewayIntentBits } from "discord.js"
import puppeteer from 'puppeteer'
import $ from 'cheerio'
import { zicoMessageFunctions } from './functions/messages/messageKeywords.js'
import { idotMessageFunctions } from './functions/messages/idotMessageFunctions.js'

const token = 'MTEyNzMxNzYyODY4ODU0Mzg3Ng.GQulcM._0toY2wenjo0FLc4hKedKH9nHAlfjUivrOGHBM'
const delay = ms => new Promise(res => setTimeout(res, ms));
let currentNumber
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
  // if (msg.guild.name === 'Blurred Reality') {
    // idotMessageFunctions(msg)
  // } else {
    try {
      if (Guild.name.includes(!'zico')) {
        console.log('blah blah')
      } else {
        zicoMessageFunctions(msg)
      }
    } catch (e) {
      msg.reply('i just broke LOL')
    }
  // }  

  // if (msg.content === 'add one') {
  //   currentNumber = currentNumber + 1
  //   msg.reply('still got' + currentNumber)
  // } else if (msg.content === 'and now') {
  //   msg.reply('got' + currentNumber)
  // } else {
  //   const url = 'https://ponyisland.net/#!/?src=association&sub=members&asc=1107';

  //   puppeteer
  //   .launch()
  //   .then(function(browser) {
  //     return browser.newPage();
  //   })
  //   .then(function(page) {
  //     return page.goto(url).then(function() {
  //       return page.content();
  //     });
  //   })
  //   .then(function(html) {
  //     const content = $('ul > li', html)
  //     const totalVal = $('ul > li', html).length
  //     currentNumber = totalVal
  //     console.log('found', currentNumber)
  //     console.log(content[0].children)
  //   })
  //   .catch(function(err) {
  //     //handle error
  //   });
  // }
})

client.login(token)
