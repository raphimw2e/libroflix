import ListaLivros from "./livroLista";

const LivroInfo = ({ livroPrincipal, outrosLivros}) =>
{
    return (
        <div className="flex justify-between p-10 bg-[#f5ecd7]">

            <div className="max-w-xl">
                <h1 className="text-3xl font-bold">
                    {livroPrincipal.titulo}
                </h1>

                <p className="mt-2">Por {livroPrincipal.autor}</p>

                <p>
                    
                </p>

            </div>
        </div>
    )
}

export default LivroInfo;