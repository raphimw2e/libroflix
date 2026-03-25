const LivroCard = ({livro}) =>
{
    return(
        <img 
        src={livro.imagem} 
        alt={livro.titulo} 
        className="w-24 rounded shadow-md hover:scale-105 transition"
        />
    );
};

export default LivroCard;