const livroCard = ({tituloSecundario, textoLivro}) =>
{
    return(
        <div className={"bg-[#F5E9D3] border-l-4 border-r-4 border-[#5A3E2B] shadow-xl"}>
            <h3>{tituloSecundario}</h3>
            <p>{textoLivro}</p>
        </div>
    );
};

export default livroCard;