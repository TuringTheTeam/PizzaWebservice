var Client = require('mariasql');

var c = new Client({
  host: '127.0.0.1',
  user: 'murilo',
  password: 'murilo',
  db: 'teste'
});

c.query('SHOW DATABASES', function(err, rows) {
  if (err)
    throw err;
  console.dir(rows);
});

//c.end();

module.exports.getTeste = function(){
    return new Promise(function(resolve){
        c.query('select * from TESTE', function(err, rows) {
          if (err)
            throw err;
          console.dir(rows[0].TEXTO)  
          resolve(JSON.stringify(rows));
        });
    })   
}

module.exports.setTeste = function(data){
    c.query(`insert into TESTE values(?)`,[data],function(err, rows){
        if(err)
            throw err;
    })
}

module.exports.insereProduto = function(data){
    c.query(`insert into PRODUTO values(?,?)`,[data.preco,data.nome],function(err, rows){
        if(err)
            throw err;
    })
}