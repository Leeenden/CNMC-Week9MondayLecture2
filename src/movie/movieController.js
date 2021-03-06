const Movie = require("./movieModel");
// add movie by title, actors[]
exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({ movie: newMovie})
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};
// list all movies 
exports.listMovies =  async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({ movies })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};
// update movie actors by movie title 
exports.updateMovie = async (req, res) => {
    try {
        //await model update one method
        const newUpdate = await Movie.updateOne(
            { title: req.body.title },
            { $set: { actors: req.body.actors } }
        )
        res.status(200).send({ movie: newUpdate })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};
// delete movie by title 
exports.deleteMovie = async (req, res) => {
    //delete One movie from the db
    try {
        const deletedMovie = await Movie.deleteOne({ title: req.body.title });
        res.status(200).send({ movie: deletedMovie })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};