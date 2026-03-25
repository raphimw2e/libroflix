import LivroCard from "./livroCard";
import { livros } from "libroflix\src\data\livros.js"
import React from "react";

const LivroLista = ({ livro }) => {

    if (!livro) return <p>Carregando os dados do livro...</p>

    return (
        <div className=" w-full flex-col flex gap-4 mt-4">
           <h1 className="text-4xl font-serif font-bold text-book-brown
            leading-tight uppercase">
            {livro.titulo}
           </h1>

           <p className="text-lg font-mediun">
            Por <span className="underline decoration-1 underline-offset cursor-pointer">
                {livro.autor}
            </span>
           </p>
        </div>
    )
}

export default LivroLista;