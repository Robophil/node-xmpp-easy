/**
 * When a new message is received, this function is called.
 *  @example to send the exact same message back to sender
 *    var from = stanza.attrs.from
 *    stanza.attrs.from = stanza.attrs.to
 *    stanza.attrs.to = from
 *    client.send(stanza)
 * 
 * @param client
 */
const Stanza = require('node-xmpp-core').Stanza

module.exports = client => (stanza) => {
    
}