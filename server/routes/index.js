const router = require('express').Router()

/* GET home page */
router.get('/', (req, res, next) => {
  res.json('All good in here')
})

router.use('/auth', require('./auth.routes'))

module.exports = router
