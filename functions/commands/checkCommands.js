import { makeProject } from "./runCommand/makeProject.js"
import { stinkySay } from "./runCommand/stinkySay.js"
import { testBreed } from "./runCommand/testBreed.js"

export const checkCommands = (msg, client) => {
  const message = msg.content.toLowerCase()
  // test breed
  if (message.includes('stinky testbreed ')) {
    const test1 = testBreed(message)
    const test2 = testBreed(message)
    const test3 = testBreed(message)
    const reply = test1 + '\n' + test2 + '\n' + test3
    msg.reply(reply)
  }

  // make project
  if (message.includes('stinky makeproject ')) {
    const projectPlan = makeProject(msg)
    msg.reply(projectPlan)
  }

  // say something
  if (message.includes('stinky say ')) {
    stinkySay(msg)
  }
}