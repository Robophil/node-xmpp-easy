/**
 * load enviromental file.
 */
require('dotenv').config()

const {WebSocketServer} = require('node-xmpp-server')
const {Stanza} = require('node-xmpp-core')

const server = WebSocketServer({
    port: process.env.XMPP_PORT,
    domain: process.env.XMPP_DOMAIN
})

server.on('connect', )