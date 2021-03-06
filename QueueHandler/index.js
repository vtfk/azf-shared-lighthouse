const checkLighthouse = require('../lib/check-lighthouse')

module.exports = async function (context, mySbMsg) {
  context.log(`azf-shared-lighthouse - ${mySbMsg.eventSourceId} - start`)
  const pageUrl = mySbMsg.url
  try {
    context.log(`azf-shared-lighthouse - ${mySbMsg.eventSourceId} - url - ${pageUrl} - lighthouse - start`)
    let result = await checkLighthouse(context, pageUrl)
    context.log(`azf-shared-lighthouse - ${mySbMsg.eventSourceId} - url - ${pageUrl} - lighthouse - success`)
    context.bindings.mySbQueue = Object.assign({}, mySbMsg, { domain: 'webquality', category: 'lighthouse', date: new Date(), timeStamp: new Date().getTime(), result: result })
    context.log(`azf-shared-lighthouse - ${mySbMsg.eventSourceId} - url - ${pageUrl} - finished`)
  } catch (error) {
    context.log.error(`azf-shared-lighthouse - ${mySbMsg.eventSourceId} - url - ${pageUrl} - ${error}`)
  }
}
