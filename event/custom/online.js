const CLIENTS = require('../../util/clients')
/**
 * This is called when a client comes online
 * @param client
 */
module.exports = client => () => {
    console.log('server:', client.jid.local, 'ONLINE')
    const clientKey = `${client.jid.user}@${client.jid.domain}`
    client['clientKey'] = clientKey
    //store client informaiton
    CLIENTS.set(clientKey, client)
}