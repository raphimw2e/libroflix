import { comentarios } from "../data/comentarios";

const SecaoComentarios = () => {
    return (
        <div className="mt-12 w-full max-w-xl">
            <h3 className="text-xs fnt-bold uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-200 pb-2">
                Comentários
            </h3>

            <div className="relative border-l border-gray-300 ml-4">
                {comentarios.map((comentario) => (
                    <div key={comentario.id} className="mb-10 ml-8 relative">
                        <div className="absolute -left-[49px] top-0 w-10 h-10 rounded-full border border-gray-300 bg-[#f5ecd7] overflow-hidden flex items-center jusitfy-center">
                            <img 
                            src={comentario.perfil}
                            alt={comentario.nome}
                            className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold text-gray-800 text-sm">{comentario.nome}</span>
                            <p className="text-gray-500 text-[13px] leading-relaxed mt-1 italic">
                                {comentario.texto}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SecaoComentarios;