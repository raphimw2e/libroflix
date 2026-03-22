const livroInfo = ({ 
    titulo,
    autor,
    avaliacao,
    tempoLeitura,
    descricao,
}) => {
    return (
        <div className="bg-[#D8C7A3] p-6 justify-start items-start">
            <h1 className="mt-4 p-2">{titulo}</h1>
            <h2 className="p-2">{autor}</h2>

            <div className="flex flex-row items-center">
                <p className="p-2">{avaliacao}</p>
                <p className="p-2">{tempoLeitura}</p>
            </div>

            <p className="p-2">{descricao}</p>
        </div>
    );
};

export default livroInfo;