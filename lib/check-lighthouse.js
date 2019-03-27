const axios = require('axios')
const lighthouseUrl = 'https://lighthouse-dot-webdotdevsite.appspot.com/lh/newaudit'
const updateScore = require('../lib/update-score')

module.exports = async (context, url) => {
  const payload = {
    url: url,
    replace: true,
    save: false
  }
  try {
    const { data } = await axios.post(lighthouseUrl, payload)
    return updateScore(data.lhrSlim)
  } catch (error) {
    context.log.error(error)
    throw error
  }
}
