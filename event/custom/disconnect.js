/**
 * This is called when a client disconnects from the server
 */
module.exports = client => () =>{
    console.log('server:', client.jid.local, 'DISCONNECT')
}