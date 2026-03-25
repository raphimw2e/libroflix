import LivroCard from "./livroCard";
import { livros } from "../../data/livros";

const LivroLista = ({ onSelect }) => {

    if (!livros) return <p>Carregando os dados do livro...</p>

    return (
        <div className=" w-full flex-col flex gap-4 mt-4">

            {livros.map((livro) => (
                <div
                    key={livro.id}
                    onClick={() => onSelect(livro)}
                    className="cursor-pointer"
                >
                <h1 className="text-4xl font-serif font-bold text-book-brown leading-tight uppercase">
                    {livro.titulo}
                </h1>

                <p className="text-lg font-medium">
                    Por <span className="underline decoration-1 underline-offset cursor-pointer">
                    {livro.autor}
                         </span>
                </p>
            </div>
        ))}
    </div>
    )
}

export default LivroLista;