import express from 'express'; // importando o express js

const app = express(); // inicializando uma aplicação express js

app.get('/', function rotaPrincipal (req,res) {     //rota get
    
    let teste = req.param('teste');
    res.send(teste);
    
}); 
    

app.listen(3000); //escutando um acesso ao servidor 3000