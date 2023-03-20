const fs = require('fs')
const text = fs.readFile('./text.txt', 'utf8', (err, data) => {
  console.log()
  if (err) throw err;
})
console.log(1)
