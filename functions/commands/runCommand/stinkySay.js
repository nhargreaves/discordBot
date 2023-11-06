export const stinkySay = (msg) => {
  let message = msg.content.toLowerCase()
  let intRepeat = 1
  console.log('in stinky say')
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
