export const makeProject = (msg) => {
  const message = msg.content.toLowerCase()

  const partialMsg = message.split('stinky makeproject ')[1]

  msg.reply('this better be in hair/body/leg/face order or it\'s not gonna work lol')
  const type = partialMsg.split(' ')[0]

  if (type !== 'qv') {
    msg.reply('i can only do QV right now :(')
  }

  const genes = partialMsg.split(' ')
  const hair = genes[1]
  const body = genes[2]
  const leg = genes[3]
  const face = genes[4]

  return '1: Carries ' + hair + ' and ' + face + '\n2. Carries ' + hair + ' and ' + leg + '\n3. Carries ' + body + ' and ' + face + '\n4. Carries ' + body + ' and ' + leg + '\n5. Carries FColour and ' + hair + '\n6. Carries FColour and BColour\n7. Carries LColour and ' + hair + '\n8. Carries LColour and BColour'
}
