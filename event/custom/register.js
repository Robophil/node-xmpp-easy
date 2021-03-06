/**
 * This allows you to register the jid to a particular user
 * eg. User.update({email: 'toyin@awoyo.com'}, {jid: opt.jid}).then(user => console.log(user))
 * @param client
 * @return function(opt, cb)
 */
module.exports = client => (opts, cb) => {
    console.log("REGISTER: ", client.jid.user + '@' + client.jid.domain + '/' + client.jid.resource)
    cb(true)
}