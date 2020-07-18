// install the express pakge
// create the package .json file 
//npm init or
//npm init -y
//install nodemon to avoid restart the server again and again - npm install-g nodemon
/////////////////////////////////////////////////////////////////////////////////////////////////////

//download express by npm install --save express
// read all the details from express.js.com site


//////////////////////////////////////////////////////////////////////////////////////////////////////
const express = require('express')

//node has aothr module for read and write files FS module

const fs =  require ('fs')

//create a exporess app(app is an object)
const app = express()

//cerate a port

const port = 3020

app.use(express.json())//allow to pass any kind of json data

///////////////////////////////////////////////////////////////////////////////////////////////////////
//let a data is with us (hardcoding as global variable)
const users=[
    {id:1,name:'arjun'},
    {id:2,name:"rama"},
    {id:3,name:"madhu"}
]
//what if the users variable is not avilable on the server while making request app get crashed and user not find error u will get in the browser

//manage routes ----by route handlers
//SYNTAX ------app.httpMethod('url',callback function())
//every cll back functions are provided with the two objects (request,response) called as (req,res)
// http methods - put ,get, post ,delete (for handling incoming requests)

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//DO like if the url is the localhost:3020/
        //homepage
app.get('/',(req,res)=>{
    //to send back a welcome message
    res.send('welcome to the website')
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//localhost:3020/users
        //show an array of users data
app.get('/users',(req,res)=>{
    res.json(users)//stringify the data and response back to the clint
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//to get by id of the user - //localhost:3020/users/:id
app.get('/users/:id',(req,res)=>{
    const id =req.params.id
    const user = users.find(user=>user.id  ==  id)
    if(user){
        res.json(user)
    }else{
        res.json({notice:'user not found'})
    }   
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//token creation//reading token
app.get('/show-token',(req,res)=>{
    const token = req.headers['x-auth']
    res.json({token})
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////

//get data
//url will be the same but according to http method the data will be get
    app.get('/customers',(req,res)=>{
        // // const token = req.headers['x-auth']//reading token in any value

        // // if(token){
        //     res.send(`get to customers`)//in this place we can perform operations by writing logic
        // // }else{
        //     // res.json({error:'jwt is not provided'})
        // // }
        

        //to read file in the (asynchronous task)
        fs.readFile('./customers.json','utf-8',(err,data)=>{
            if(err){
                res.json(err)
            }else{
                const customers =JSON.parse(data)
                res.json(customers) // passing data 
            }
        })
    })

    app.get('/customers/:id',(req,res)=>{
        res.send('get to one customer')
    })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//post(create customers)
//any form data will be read by the server using (req.body)//to do this eneble app.use(express.json())

app.post('/customers',(req,res)=>{
    console.log(req.body)//read incoming data
    const customer={
        id:Number(new Date()),
        name:req.body.name,
        email:req.body.email
    }

    fs.readFile('./customers.json',"utf-8",(err,data)=>{
        if(err){
            res.json(err)
        }else{
            const customers=JSON.parse(data)
            customers.push(customer)
            fs.writeFile('./customers.json',JSON.stringify(customers),()=>{
                res.json(customer)
            })
        }
    })
    res.send('post to customers')
})


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//put
app.put('/customers/:id',(req,res)=>{
    const id = req.params.id
    fs.readFile('./customers.json','utf-8',(err,data)=>{
        if(err){
            res.json(err)
        }else{
            let customers=JSON.parse(data)
            const customer=customers.find(customer=> customer.id==id)
            customers=customers.filter(customer=>customer.id!=id)
            console.log(customer,customers)
            customers.name = req.body.name
            customers.email = req.body.email
            customers.push(customer)
            // customer.assign(customer,customers)
            fs.writeFile('./customers.json',JSON.stringify(customers),()=>{
                res.json(customer)
            })
        }
    })    
    // res.send(customer) // if we want to send json data then send.json
})



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//delete
app.delete('/customers/:id',(req,res)=>{
    res.send('delete to customers')
})




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(port,()=>{
    console.log('listening on port')
})
//by using the express if the url path is not found then it will give a result as the cannot get /users(unfounded url), not as the nodes http module