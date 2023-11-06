// // useful notes for the future ___________________________________________________________________________________________________________________________________

// // to @ someone________________________________________________________________________________________________________________________________________________
// if (msg.content === 'stinky fetch dan') {
//   const channel = client.channels.cache.find(channel => channel.name === 'rat-chatter')
//   channel.send('<@130196074223632384>')
// }

// // tell someone________________________________________________________________________________________________________________________________________________
// if (msg.content.includes('stinky tell dan')) {
//   console.log(msg.content.split('stinky tell dan ')[1])
//   const channel = client.channels.cache.find(channel => channel.name === 'rat-chatter')
//   channel.send(msg.content.split('stinky tell dan ')[1])
// }

// // page reading________________________________________________________________________________________________________________________________________________
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

// // check username________________________________________________________________________________________________________________________________________________
// if (msg.author.username.includes('audddssie'))
