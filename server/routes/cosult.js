
const express          = require('express');
const appi             = express.Router();
const fetch            = require('node-fetch');


appi.get('/consult/:que/:id',(req,res,next)=>{
  const que=req.params
  const id=req.params;
  fetch(`http://pokeapi.co/api/v2/${que.que}/${id.id}?`)
  
  .then(result => result.json())
  .then(movie => {
    console.log(movie);
    //res.render('detail', movie);
  })


})

module.exports = appi;
