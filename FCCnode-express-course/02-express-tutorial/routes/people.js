const express = require('express')
const router = express.Router()
const {
  getReq,
  postReq,
  postmanpostReq,
  putReq,
  delReq
} = require('./controllers/jobs')

let { people } = require('../data')

// router.get('/', getReq)
// router.post('/', postReq)
// router.post('/postman', postmanpostReq)
// router.put('/:id', putReq)

router.route('/').get(getReq).post(postReq)
router.route('/postman').post(postmanpostReq)
router.route('/:id').put(putReq)

router.delete('/:id', delReq)
module.exports = router
