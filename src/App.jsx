import { useState } from "react";
import HomePage from "./pages/homePage";
import LivroInfo from "./componentes/livros/livroInfo";
import { livros } from "./data/livros";

function App() {
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  const outros = livros.filter(livro => livro.id != livroSelecionado?.id);

  return (
    <main className="min-h-screen bg-[#f5ecd7]">
      {livroSelecionado ? (
        <LivroInfo
          livroPrincipal={livroSelecionado}
          outrosLivros={outros}
          voltar={() => setLivroSelecionado(null)}
        />
      ) : (
        <HomePage
        onSelect={setLivroSelecionado}
        />
      )}
    </main>
  )
}

<<<<<<< HEAD
export default App;
=======
export default App
>>>>>>> fb9a5c9c97fb4f4605abb89b808fb5bee4d15ebb
