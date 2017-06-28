/**
 * Here you can authenticate a user.
 * return cb(null, opts) if truthy or cb(false) if false
 * @param client
 * @return function(opt, cb)
 */
module.exports = client => (opts, cb) => {
    //do authentication / password check here
    var authenticated = false

    if(authenticated){ //truthy
        cb(null, opts)
    }else{ //false
        cb(false)
    }
}