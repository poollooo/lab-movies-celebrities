// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Movie = require('../models/Movie.model')

router.post('/actor/:castId', async (req, res, next) => {
    try {
        const { castId } = req.params
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

router.get('/', async (req, res, next) => {
    try {
        const movies = await Movie.find()
        res.status(200).json({ movies })
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const movieToFind = await Movie.findById(id)
        res.json({ movieToFind })
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    await Movie.findByIdAndDelete(req.params.id)
    res.sendStatus(204)
})

router.patch('/:id', async (req, res, next) => {
    const newMovie = req.body
    const movie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
            title: newMovie.title,
            genre: newMovie.genre,
            plot: newMovie.plot,
        },
        { new: true }
    )
    res.json({ movie })
    res.sendStatus(200)
})

module.exports = router