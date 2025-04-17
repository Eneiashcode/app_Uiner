import { useState } from 'react'
import Login from './pages/Login'
import EscolherPerfil from './pages/EscolherPerfil'
import CadastroJogador from './pages/CadastroJogador'
import CadastroOrganizador from './pages/CadastroOrganizador'
import Home from './pages/Home'
import CadastrarRanking from './pages/CadastrarRanking' // ✅ novo import

function App() {
  const [tela, setTela] = useState('login') // login, escolherPerfil, cadastroJogador, cadastroOrganizador, home, cadastrarRanking

  const irPara = (novaTela) => {
    setTela(novaTela)
  }

  return (
    <div className="min-h-screen bg-blue-50">
      {tela === 'login' && <Login irPara={irPara} />}
      {tela === 'escolherPerfil' && <EscolherPerfil irPara={irPara} />}
      {tela === 'cadastroJogador' && <CadastroJogador irPara={irPara} />}
      {tela === 'cadastroOrganizador' && <CadastroOrganizador irPara={irPara} />}
      {tela === 'home' && <Home irPara={irPara} />} {/* ✅ passa irPara pra Home */}
      {tela === 'cadastrarRanking' && <CadastrarRanking irPara={irPara} />} {/* ✅ nova rota */}
    </div>
  )
}

export default App
