export const checkMentions = (msg, client) => {
  // generic @stinky
  if (msg.mentions.has(client.user)) {
    msg.channel.send('what do you want now')
  }
}
