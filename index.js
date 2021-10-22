const path =require("path")

const express = require ('express')
const app = express()
const { config, engine } = require('express-edge');
const mongoose = require('mongoose')


app.use(express.static('public'))
app.use(engine)

mongoose.connect('mongodb://localhost/mode-js-blog')


app.set('views', `${__dirname}/views`);

app.get("/",(req,res)=>{

    //res.sendFile(path.resolve(__dirname,"pages/index.html"))
    res.render('index')
})

app.get("/about",(req,res)=>{

    //res.sendFile(path.resolve(__dirname,"pages/about.html"))
    res.render('about')
})

app.get("/contact",(req,res)=>{

    res.render('contact')
})

app.get("/post",(req,res)=>{

    res.render('post')
})

//
app.listen(4000,()=> {

    console.log('app listining on 4000')
})







/*const aboutpage = fs.readFileSync('about.html')
const homepage = fs.readFileSync('index.html')

const server= http.createServer((request,response)=>{

    if(request.url=== '/about'){
        return response.end(aboutpage)
    }else if (request.url==='/'){
        return response.end(homepage)
    }else{
        response.writeHead(404)
        console.log(request.url)

        response.end('PAG WAS NOT FOUND')
    }

} )

server.listen(3000)*/
