require('dotenv').config()

var debug = console.log
var xmpp = require('node-xmpp-server');
var Client = require('node-xmpp-client');
var Stanza = require('node-xmpp-core').Stanza;
var IQ = require('node-xmpp-core').IQ;


// var client1 = new Client({
//     websocket: { url: `ws://${process.env.XMPP_DOMAIN}:${process.env.XMPP_PORT}` },
//     jid: 'client1@localhost',
//     password: 'secret'
// })
// client1.on('online', function (data) {
//     debug('client1 is online')
//     debug('client1', data)
//     client1.send(new Stanza('message', { to: 'client2@localhost' }).c('body').t('HelloWorld'))
// })
// client1.on('stanza', function (stanza) {
//     debug('client1', 'received stanza', stanza.root().toString())
// })
// client1.on('error', function (error) {
//     debug('client1 auth failed')
//     debug('client1', error)
// })



var client2 = new Client({
    websocket: { url: `ws://${process.env.XMPP_DOMAIN}:${process.env.XMPP_PORT}` },
    jid: 'client2@localhost',
    password: 'notsecret'
})
client2.on('error', function (error) {
    debug('client2 auth failed')
    debug('client2', error)
})
client2.on('online', function (data) {
    debug('client2 is online')
    debug('client2', data)
})
client2.on('stanza', function (stanza) {
    debug('client2', 'received stanza', "yay!!", stanza.root().toString())
})

console.log(`connected to server through websockts on ws://${process.env.XMPP_DOMAIN}:${process.env.XMPP_PORT}`)