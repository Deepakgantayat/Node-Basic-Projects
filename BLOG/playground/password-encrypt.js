const bcryptjs = require('bcryptjs')

const password = 'kitukitu'

bcryptjs.genSalt(10)
.then(function(salt){
    console.log(salt)
    bcryptjs.hash(password,salt)
    .then(function(encryptedPassword){
        console.log(encryptedPassword)
    })
})