

var express = require('express')
const bodyParse= require('body-parser')
const translate = require('translate-google')
var path = require('path');
const { text } = require('express');
var traduzido=''



const app= express()
const port= 3000

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'pug');



app.use(express.json())

app.use(express.urlencoded({
  extended: false
}))







app.get('/translate/:text?/:lang?', (req, res) => { 

   
 
      
    Translate(req.params.text, req.params.lang);
    setTimeout(() => {
  
    res.render('index',{
        
      traducao:  traduzido,
      text: req.params.text,
      selected: req.params.lang
      
    })
  
  }, 3000);

    
  
})


function Translate(text, lang) 
{
    
  
  translate( text, {from: 'en', to: lang }).then(res => {
    
    traduzido = res.toString()
   

    
  }).catch(err => {
    
      traduzido = err.toString()+"Recarregue novamente"
  })

    
}



app.listen(port, console.log('Api load!'))






