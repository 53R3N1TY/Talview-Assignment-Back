const axios = require('axios')

exports.github = (req, res) => {
  getRepo()
  const io = req.app.get('io')
  
  function getRepo() {
    axios.get(req.user._json.repos_url)
      .then(function(response) {
        const user = { 
          name: req.user.username,
          photo: req.user.photos[0].value,
          repos: response.data
        }
        io.in(req.session.socketId).emit('github', user)
        res.end()
      })
      .catch(function(error) {
        console.log("rep err", error)
        res.end()
      })
  }
} 