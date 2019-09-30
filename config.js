const providers = ['github']

const callbacks = providers.map(provider => {
  return process.env.NODE_ENV === 'production'
    ? `https://react-auth-twitter.herokuapp.com/${provider}/callback`
    : `https://9a1a308c.ngrok.io/${provider}/callback`
})

const [githubURL] = callbacks

exports.CLIENT_ORIGIN = 'https://9a1a308c.ngrok.io'
exports.GITHUB_CONFIG = {
  clientID: process.env.GITHUB_KEY,
  clientSecret: process.env.GITHUB_SECRET,
  callbackURL: githubURL
}