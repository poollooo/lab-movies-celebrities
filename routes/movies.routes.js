// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Movie = require('../models/Movie.model')

router.post('/actor/:castId', async (req, res, next) => {
    try {
        const { castId } = req.params
        // if (!mongoose.isValidObjectId(castId)) {
        //     return res.status(400).json({ message: `Please provide a valid actor Id` })
        // }
        const newMovie = req.body
        const createdMovie = await Movie.create({
            title: newMovie.title,
            genre: newMovie.genre,
            plot: newMovie.plot,
            cast: castId,
        })
        console.log('createdMovie', createdMovie)

        res.status(201).json({ createdMovie })
    } catch (error) {
        next(error)
    }
})

// router.get('/', async (req, res, next) => {
//     try {
//         const celebrities = await Celebrity.find()
//         res.status(200).json({ celebrities })
//     } catch (error) {
//         next(error)
//     }
// })

module.exports = router