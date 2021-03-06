const CLIENTS = require('../../util/clients')
/**
 * This is called when a client disconnects from the server
 */
module.exports = client => () =>{
    console.log('server:', client.jid.local, 'DISCONNECT')
    const clientKey = `${client.jid.user}@${client.jid.domain}`
    CLIENTS.delete(clientKey)
}