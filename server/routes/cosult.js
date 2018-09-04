
const express          = require('express');
const appi             = express.Router();
const fetch            = require('node-fetch');
const unirest          =require('unirest')


appi.get('/consult/:que?/:id?',(req,res,next)=>{
  const que=req.params
  const id=req.params;
  // fetch('https://love-calculator.p.mashape.com/getPercentage?fname=juan&sname=pepe')
  
  // .then(result => result.json())
  // .then(movie => {
  //   console.log(movie);
  //   //res.render('detail', movie);
  // })

  unirest.get('https://love-calculator.p.mashape.com/getPercentage?fname='+que.que+'&sname='+id.id)
.header("X-Mashape-Key", "QAw59gfgaAmshJYxdTQCj2WKtkgmp1rQno9jsnwXqefWqzOBcB")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});


})

module.exports = appi;
