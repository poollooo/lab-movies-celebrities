// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model')

// all your routes here

router.post('/', async (req, res, next) => {
    try {
        const newCelebrity = req.body
        const createdCelebrity = await Celebrity.create({
            name: newCelebrity.name,
            occupation: newCelebrity.occupation,
            catchPhrase: newCelebrity.catchPhrase,
        })
        console.log('createdCelebrity', createdCelebrity)

        res.status(201).json({ createdCelebrity })
    } catch (error) {
        next(error)
    }
})

module.exports = router