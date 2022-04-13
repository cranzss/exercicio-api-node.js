const express = require('express');
const app = express();
const req = require('express/lib/request');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = 8000;

app.listen(port,()=>{
    console.log("API sendo executada na porta " + port);
});

app.get('/clientes/:nome', (req,res) =>{
    return res.send(`Cliente "${req.params.nome}" encontrado`)
});

app.post('/clientes', (req, res)=>{
let senha = "admin";
if (senha == req.headers.access){
    let cliente = req.body;
    let ret = "\nDados enviados\nNome: " + cliente.nome;
    ret+="\nSobrenome: " + cliente.sobrenome;
    ret+="\nIdade: " + cliente.idade;
    ret+="\nProduto comprado: " + cliente.produto;
    ret+="\nValor do produto: " + cliente.valor;
    res.send(ret);
    console.log("Dados enviados com sucesso.");
}else{
    console.log("Senha incorreta.")
}
});

app.get('/funcionario/:nome', (req,res) =>{
    return res.send(`Funcionário "${req.params.nome}" encontrado`)
});

app.delete('/funcionarios', (req, res)=>{
    let senha = "senha";
    if (senha == req.headers.access){
        let func = req.body;
        let msg = "\nDados enviados\nNome: " + func.nome;
        msg+="\nSobrenome: " + func.sobrenome;
        msg+="\nIdade: " + func.idade;
        msg+="\nCódigo do funcionário: " + func.cod;
        msg+="\nData de admissão: " + func.data;
        msg+="\nDepartamento: " + func.dpto;
        res.send(msg);
        console.log("Dados enviados com sucesso.");
    }else{
        console.log("Senha incorreta.")
    }
    });
    
app.put('/funcionarios', (req, res)=>{
let senha = "senha";
if (senha == req.headers.access){
    let func = req.body;
    let msg = "\nDados enviados\nNome: " + func.nome;
    msg+="\nSobrenome: " + func.sobrenome;
    msg+="\nIdade: " + func.idade;
    msg+="\nCódigo do funcionário: " + func.cod;
    msg+="\nData de admissão: " + func.data;
    msg+="\nDepartamento: " + func.dpto;
    res.send(msg);
    console.log("Dados enviados com sucesso.");
}else{
    console.log("Senha incorreta.")
}
});