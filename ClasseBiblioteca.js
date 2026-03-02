import e from "express";


export class Biblioteca{
    constructor(){
        this.livros = [];
    }



    //Metodo Adicionar Livro
    adicionarLivro(livro){
        console.log('\n');
        console.log(`Adicionar Livro`);
        const anoAtual = new Date().getFullYear();

        if( !(livro.anoPublicacao > anoAtual) && livro.isbn.length == 13 ){
            
            console.log(`Livro ${livro.titulo} adicionado`);
            this.livros.push(livro);
            return livro;
        }else if(livro.anoPublicacao > anoAtual){
            console.log(`Livro ${livro.titulo} não adicionado por ter ano de publicação futuro.`);
            return null;
        }else if(livro.isbn.length != 13){
            console.log(`Livro ${livro.titulo} não adicionado por ter ISBN inválido.`);
            return null;
        }

    }

    //Metodo Listar Livros 
    listarLivros(){
        return this.livros;
    }

    //Metodo Buscar por ISBN
    buscarPorIsbn(isbn){
       const resultado = this.livros.find(l =>l.isbn === isbn);
       return resultado;
     }

     //Metodo Remover por ISBN
     removerLivro(isbn){
        const totalAntes = this.livros.length;
        this.livros = this.livros.filter(l=> l.isbn !== isbn);
        if(this.livros.length < totalAntes){
            return true;
        }else{
            return false;
        }
     }}

