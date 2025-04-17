import { useState } from 'react'
import { db, auth } from '@/firebase.js'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export default function CadastrarRanking({ irPara }) {
  const [nome, setNome] = useState('')
  const [categoria, setCategoria] = useState('A')
  const [inicio, setInicio] = useState('')
  const [fimInscricao, setFimInscricao] = useState('')
  const [pontos, setPontos] = useState({ vitoria: 100, derrota: 30, wo: 50, desistencia: 10 })
  const [erro, setErro] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = auth.currentUser
      if (!user) throw new Error('Usuário não autenticado.')

      await addDoc(collection(db, 'rankings'), {
        nome,
        categoria,
        organizadorUid: user.uid,
        dataCriacao: Timestamp.now(),
        inicio: new Date(inicio),
        fimInscricao: new Date(fimInscricao),
        pontos,
      })

      irPara('home')
    } catch (err) {
      console.error(err)
      setErro(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-blue-700 mb-6 text-center">
          Cadastrar Ranking
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input type="text" placeholder="Nome do Ranking" value={nome} onChange={(e) => setNome(e.target.value)} required className="w-full px-4 py-3 border rounded-md" />

          <select value={categoria} onChange={(e) => setCategoria(e.target.value)} className="w-full px-4 py-3 border rounded-md">
            <option value="A">Categoria A</option>
            <option value="B">Categoria B</option>
            <option value="C">Categoria C</option>
          </select>

          <label className="block text-sm text-gray-600 font-medium">Início do Ranking</label>
          <input type="date" value={inicio} onChange={(e) => setInicio(e.target.value)} required className="w-full px-4 py-3 border rounded-md" />

          <label className="block text-sm text-gray-600 font-medium">Fim das Inscrições</label>
          <input type="date" value={fimInscricao} onChange={(e) => setFimInscricao(e.target.value)} required className="w-full px-4 py-3 border rounded-md" />

<div>
  <label className="block text-sm text-gray-600 font-medium mb-2">
    Defina a pontuação do ranking para cada situação de jogo:
  </label>
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label className="block text-sm text-gray-700">Vitória</label>
      <input
        type="number"
        value={pontos.vitoria}
        onChange={(e) => setPontos({ ...pontos, vitoria: Number(e.target.value) })}
        className="w-full px-4 py-3 border rounded-md"
      />
    </div>
        <div>
          <label className="block text-sm text-gray-700">Derrota</label>
          <input
            type="number"
            value={pontos.derrota}
            onChange={(e) => setPontos({ ...pontos, derrota: Number(e.target.value) })}
            className="w-full px-4 py-3 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700">W.O. (vencedor)</label>
          <input
            type="number"
            value={pontos.wo}
            onChange={(e) => setPontos({ ...pontos, wo: Number(e.target.value) })}
            className="w-full px-4 py-3 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700">Desistência (perdedor)</label>
          <input
            type="number"
            value={pontos.desistencia}
            onChange={(e) => setPontos({ ...pontos, desistencia: Number(e.target.value) })}
            className="w-full px-4 py-3 border rounded-md"
          />
        </div>
      </div>
    </div>

          {erro && <p className="text-red-500 text-sm">{erro}</p>}

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mt-2">
            Criar Ranking
          </button>
        </form>

        <button onClick={() => irPara('home')} className="w-full mt-4 text-blue-600 hover:underline text-sm">
          Voltar
        </button>
      </div>
    </div>
  )
}
