require('dotenv').config()
var express = require("express")
var router = express.Router()


router.get("/movies", function (req, res, next) {
  console.log('backend')
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      res.json({movies: data.results})
      console.log(data)})

})

module.exports = router
