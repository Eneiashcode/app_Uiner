import { useState } from 'react'
import Login from './pages/Login'
import EscolherPerfil from './pages/EscolherPerfil'
import CadastroJogador from './pages/CadastroJogador'
import CadastroOrganizador from './pages/CadastroOrganizador'
import Home from './pages/Home'

function App() {
  const [tela, setTela] = useState('login') // login, escolherPerfil, cadastroJogador, cadastroOrganizador, home

  const irPara = (novaTela) => {
    setTela(novaTela)
  }

  return (
    <div className="min-h-screen bg-blue-50">
      {tela === 'login' && <Login irPara={irPara} />}
      {tela === 'escolherPerfil' && <EscolherPerfil irPara={irPara} />}
      {tela === 'cadastroJogador' && <CadastroJogador irPara={irPara} />}
      {tela === 'cadastroOrganizador' && <CadastroOrganizador irPara={irPara} />}
      {tela === 'home' && <Home />}
    </div>
  )
}

export default App
