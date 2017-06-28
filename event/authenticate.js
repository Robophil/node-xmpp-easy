module.exports = (opts, cb) => {
    //do authentication / password check here
    var authenticated = false

    if(authenticated){ //truthy
        cb(null, opts)
    }else{ //false
        cb(false)
    }
}