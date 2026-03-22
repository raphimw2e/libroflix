import LivroCard from "./livroCard";

const LivroLista = ({livros}) => {
    return (
        <div className="flex gap-4 mt-4">
           {livros.map((livro) =>
                <LivroCard key={livro.id} livro={livro}/>)}
        </div>
    )
}

export default LivroLista;