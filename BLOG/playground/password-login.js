const bcryptjs = require('bcryptjs')

const encrypted = '$2a$10$o5eloV/yB10A89.rWsXoVO3OcgMX4AII2X5le18VOlvjAKaDShlcW'
const password = 'kitukitu'

bcryptjs.compare(password,encrypted)
    .then(function(result){
        console.log(result)
    })