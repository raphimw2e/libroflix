import { livros } from "../src/data/livros.js"
import './App.css'

function App() {
  return (
    <div>
        {livros.map(livro => (
            <p key={livro.id}>{livro.titulo}</p>
        ))}
    </div>
  )
}

export default App
