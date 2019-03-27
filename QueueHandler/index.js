const checkLighthouse = require('../lib/check-lighthouse')

module.exports = async function (context, mySbMsg) {
  context.log(`azf-shared-lighthouse - ${mySbMsg.eventSourceId} - start`)
  const pageUrl = mySbMsg.url
  try {
    context.log(`azf-shared-lighthouse - ${mySbMsg.eventSourceId} - url - ${pageUrl} - lighthouse - start`)
    let result = await checkLighthouse(context, pageUrl)
    context.log(`azf-shared-lighthouse - ${mySbMsg.eventSourceId} - url - ${pageUrl} - lighthouse - success`)
    context.bindings.mySbQueue = Object.assign({}, mySbMsg, { result: result })
    context.log(`azf-shared-lighthouse - ${mySbMsg.eventSourceId} - url - ${pageUrl} - finished`)
  } catch (error) {
    context.log.error(`job - ${mySbMsg.eventSourceId} - ${pageUrl} - ${error}`)
  }
}
