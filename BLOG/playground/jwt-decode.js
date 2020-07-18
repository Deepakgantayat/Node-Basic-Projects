const jwt = require('jsonwebtoken')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRlOWJiMWRiZjIzMTAyZThjNWUzMTkiLCJ1c2VybmFtZSI6InVzZXIyIiwiY3JlYXRlZEF0IjoxNTc0ODgzMDM2NjA2LCJpYXQiOjE1NzQ4ODMwMzZ9.dWomeQ7HugsC5zvfVmaCXf24uhnwubFaN0MXsbAE9cA'

console.log(jwt.verify(token, 'jwt@123'))