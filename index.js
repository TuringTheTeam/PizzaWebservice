const express = require('express')
const app = express()

let repo = require('./app/repository');

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/data', function(req, res){
    repo.getTeste()
    .then(function(data){
        res.send(data);
    })    
})

app.get('/sent/:value',function(req, res){
    console.dir(req.params.value)
    res.send(req.params.value);
    repo.setTeste(req.params.value);
})

app.post('/produto/:preco/:nome',function(req, res){
    var preco = req.params.preco;
    var nome = req.params.nome;
    repo.insereProduto({preco: preco, nome: nome});
})

app.post('/teste/:value',function(req, res){
    var value = req.params.value;
    res.send('Hello World ' + value);
})

app.listen(3000, function () {
  console.log(`Example app listening on port 3000`)
})