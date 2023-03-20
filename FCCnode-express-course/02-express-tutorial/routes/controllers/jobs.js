let { people } = require('../../data')
const getReq = (req, res) => {
  res.status(200).json({ success: true, data: people })
}
const postReq = (req, res) => {
  console.log(req.body)
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: "please provide name" })
  }
  res.status(202).json({ success: true, person: name })
}
const postmanpostReq = (req, res) => {
  const { name } = req.body
  console.log(name)
  if (!name) {
    return res.status(400).json({ success: false, msg: "please provide name" })
  }
  let word = "word"
  res.status(201).json({ success: true, data: [...people, { id: 24, word }] })

}
const putReq = (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const person = people.find((person) => person.id == id)
  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with id ${id}` })
  }
  people.forEach((person) => {
    if (person.id == id) {
      person.name = name
    }
  })
  res.status(200).json({ success: true, data: people })
}
const delReq = (req, res) => {
  const { id } = req.params
  if (id) {
    people = people.filter((p) => p.id != id)
    return res.status(202).send(`deleted item with id ${id}`)
  }
  res.status(400).send("wrong id")
}

module.exports = {
  getReq,
  postReq,
  postmanpostReq,
  putReq,
  delReq
}
