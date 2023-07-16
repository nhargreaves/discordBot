const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let author = context.params.event.author;
let botMention = context.params.event.mentions.find(mention => mention.bot);
let newMessage = context.params.event.content;
let historyKey = `character_bot__${author.id}_chat`;
let historyLength = 10; // 5 back-and-forth messages
let historyTTL = 600; // 10 minutes

let chatHistory = await lib.utils.kv['@0.1.16'].get({
  key: historyKey,
  defaultValue: [],
});

let acknowledgementMessage = await lib.discord.channels['@0.3.4'].messages.create({
  channel_id: `${context.params.event.channel_id}`,
  content: `...`,
  message_reference: {
    message_id: context.params.event.id,
    fail_if_not_exists: false
  }
});