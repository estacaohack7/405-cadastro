const fs = require('fs');
const comando = process.argv[2]; 
const nome = process.argv[3]; 
const email = process.argv[4];
const arquivo = 'cadastros.json';

let cadastros = {};

fs.readFile(arquivo, (erro, dados) => {

    if(!erro){
        let dadosString = dados.toString();
        cadastros = JSON.parse(dadosString);
    }
    
    if(comando === 'salvar'){
        if(!nome || !email){
            console.log('Digite o nome e o email, cacilda!');
        }else{
            cadastros[nome] = email;
    
            let dados = JSON.stringify(cadastros);
    
            fs.writeFile(arquivo, dados, (erro) => {
                if(erro){
                    console.log('Deu ruim');
                }else{
                    console.log('Gravei o arquivo');
                }
            });
        }
    }else if(comando === 'buscar'){
        console.log(cadastros[nome]);
    }else if (comando === 'buscar-todos'){
        console.log(cadastros);
    }else{
        console.log('Tá na disney! Não tem esse comando.')
    }
    
});


