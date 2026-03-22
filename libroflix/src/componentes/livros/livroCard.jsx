const livroCard = ({livro}) =>
{
    return(
        <img 
        src={livro.imagem} 
        alt={livro.titulo} 
        className="w-24 roudend shadow-md hover:scale-105 transition"
        />
    );
};

export default livroCard;