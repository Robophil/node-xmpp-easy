const CLIENT = require('../../util/clients')
/**
 * This is called when a client comes online
 * @param client
 */
module.exports = client => () => {
    console.log('server:', client.jid.local, 'ONLINE')
    const clientKey = client.jid.user + '@' + client.jid.domain + '/' + client.jid.resource
    //store client informaiton
    CLIENT.set(clientKey, client)
}