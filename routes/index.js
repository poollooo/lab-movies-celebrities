const router = require('express').Router()
const celebritiesRouter = require('./celebrities.routes')
const moviesRouter = require('./movies.routes')

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get('/', (req, res, next) =>
  res.json({ success: true, name: 'lab-movies-celebrities' })
)

router.use('/celebrities', celebritiesRouter)
router.use('/movie', moviesRouter)

module.exports = router
