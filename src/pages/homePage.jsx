import LivroCard from "../componentes/livros/livroCard";
import Button from "../componentes/button";
import { livros } from "../data/livros";



const HomePage = ({ onSelect}) => {

    const principal = livros[0];
    const outros = livros.slice(1);

    return (
        <div className="p-10 bg-red-500">
            <section className="flex flex-col md:flex-row gap-10 items-center mb-16">
                <div className="max-w-xl">

                    <h1 className="text-5xl font-bold text-book-brown mb-4 uppercase font-serif">
                        {principal.titulo}
                    </h1>

                    <p className="text-xl mb-4"> Por <span className="underline">{principal.autor}</span></p>

                    <div className="flex items-center gap-4 mb-6">
                        <span>⭐{principal.nota}</span>
                        <span>⏱️{principal.duracao}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-8">{principal.descricao}</p>

                    <div className="flex gap-4">
                        <Button color="secondary" onClick={() => onSelect(principal)}>
                            ¡VER EL TRÁILER AHORA!
                        </Button>
                    </div>
                </div>

                <div className="w-80 shadow-2xl cursor-pointer" onClick={() => onSelect(principal)}>
                    <img src={principal.imagem} alt={principal.titulo} className="w-full rounded" />
                </div>
            </section>

            <section>
                <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-gray-600">
                    Otros libros del autor
                </h3>

                <div className="flex gap-6 overflow-x-auto pb-4">
                    {outros.map(livro => (
                        <div key={livro.id} onClick={() => onSelect(livro)} className="cursor-pointer">
                            <LivroCard livro={livro}/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default HomePage;