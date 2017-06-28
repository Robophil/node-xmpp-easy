/**
 * This is called when a client comes online
 * @param client
 */
module.exports = client => () => {
    console.log('server:', client.jid.local, 'ONLINE')
}