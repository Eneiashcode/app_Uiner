import { useState } from 'react'
// 🔧 Corrigido aqui:
import { auth, db } from '@/firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default function CadastroJogador({ irPara }) {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, senha)

      await setDoc(doc(db, 'usuarios', userCred.user.uid), {
        tipo: 'jogador',
        nome,
        sobrenome,
        email
      })

      irPara('login')
    } catch (err) {
      console.error('[ERRO FIREBASE]', err)
      setErro(err.message) // <- mostra a mensagem real do Firebase
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-bold text-blue-700 mb-6 text-center">
          Cadastro de Jogador
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-md"
          />
          <input
            type="text"
            placeholder="Sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-md"
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-md"
          />
          <input
            type="password"
            placeholder="Criar uma senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full px-4 py-3 border rounded-md"
          />

          {erro && <p className="text-red-500 text-sm">{erro}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mt-2"
          >
            Criar Conta
          </button>
        </form>

        <button
          onClick={() => irPara('escolherPerfil')}
          className="w-full mt-4 text-blue-600 hover:underline text-sm"
        >
          Voltar para escolha de perfil
        </button>
      </div>
    </div>
  )
}
