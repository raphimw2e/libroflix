import Button from "../button";
import SecaoComentarios from "../secaoComentarios";

const LivroInfo = ({ livroPrincipal, outrosLivros, voltar }) => {
    if (!livroPrincipal) return null;

    return (
        <div className="p-10 animate-fade-in">

            {/* Informações do Livro */}
            <button onClick={voltar} className="mb-8 text-sm hover:underline">Voltar</button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div>
                    <h1 className="text-4xl font-serif font-bold mb-2 uppercase">{livroPrincipal.titulo}</h1>
                    <p className="mb-4 text-lg">Por {livroPrincipal.autor}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{livroPrincipal.descricao}</p>
                </div>

                {/* Botões */}
                <div className="flex gap-2 mt-6">
                    <Button color="secondary">▶</Button>
                    <button className="p-2 bg-gay-200 rounded">❤</button>
                </div>
            </div>


            {/* Avisos importantes */}
            <div className="flex flex-col gap-4">
                <div className="bg-[#e8dfc8] p-4 rounded flex items-center gap-2">
                    <span className="text-xs">ⓘ Proibido por Ditaduras</span>
                    <span className="text-xs">ⓘ Autor renegou a obra</span>
                    <span className="text-xs">ⓘ Base Marxista</span>
                </div>

                {/* Botões importantes */}
                <div>
                    <Button color="scondary">Ler Análise</Button>
                    <button className="border border-brown p-2 rounded">Comprar Livro</button>
                </div>
            </div>

            <div>
                {SecaoComentarios()}
            </div>

        </div>
    )
}

export default LivroInfo;