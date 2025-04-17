import { useEffect, useState } from 'react'
import { auth, db } from '@/firebase.js'
import { doc, getDoc, collection, getDocs, query, where, Timestamp } from 'firebase/firestore'
import { signOut, onAuthStateChanged } from 'firebase/auth'

export default function Home({ irPara }) {
  const [tipoUsuario, setTipoUsuario] = useState(null)
  const [rankingsAtivos, setRankingsAtivos] = useState([])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('✅ Usuário logado:', user.email)

        const docRef = doc(db, 'usuarios', user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          const tipo = docSnap.data().tipo
          console.log('📌 Tipo do usuário:', tipo)
          setTipoUsuario(tipo)
        } else {
          console.warn('⚠️ Documento do usuário não encontrado no Firestore')
        }
      } else {
        console.warn('⚠️ Nenhum usuário logado')
        setTipoUsuario(null)
      }
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const buscarRankings = async () => {
      const q = query(
        collection(db, 'rankings'),
        where('fimInscricao', '>=', Timestamp.now())
      )
      const querySnap = await getDocs(q)
      const resultados = querySnap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      setRankingsAtivos(resultados)
    }

    buscarRankings()
  }, [])

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <header className="bg-blue-700 text-white py-4 px-6 rounded-xl shadow mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Uiner 🎾</h1>
        <button
          onClick={async () => {
            await signOut(auth)
            irPara('login')
          }}
          className="text-sm bg-white text-blue-700 px-3 py-1 rounded hover:bg-blue-100"
        >
          Sair
        </button>
      </header>

      {tipoUsuario === 'organizador' && (
        <button
          onClick={() => irPara('cadastrarRanking')}
          className="mb-6 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 shadow"
        >
          ➕ Cadastrar Novo Ranking
        </button>
      )}

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <span className="block text-blue-700 text-xl font-semibold mb-2">📅</span>
          <p className="text-gray-700 font-medium">Meus Jogos Pendentes</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <span className="block text-purple-700 text-xl font-semibold mb-2">🏆</span>
          <p className="text-gray-700 font-medium">Meus Rankings</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <span className="block text-green-600 text-xl font-semibold mb-2">🎯</span>
          <p className="text-gray-700 font-medium">Meus Torneios</p>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-bold text-blue-700 mb-4">Atividades dos Amigos</h2>

{rankingsAtivos.map(r => (
  <div key={r.id} className="py-3 border-b">
    <p className="text-sm">
      📢 <span className="font-bold">{r.nome}</span> está com inscrições abertas até{' '}
      <span className="font-semibold">
        {new Date(r.fimInscricao.seconds * 1000).toLocaleDateString('pt-BR')}
      </span>
    </p>

    {tipoUsuario === 'jogador' && (
      <button
        onClick={() => alert(`Inscrição simulada para o ranking "${r.nome}"`)}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
      >
        Quero me inscrever
      </button>
    )}
  </div>
))}

        <div className="border-b py-3">
          <p className="text-sm">
            <span className="font-bold text-blue-700">Lucas</span> venceu <span className="font-bold text-gray-800">Rafael</span> por 6/4 6/3
          </p>
          <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
            <button className="hover:text-blue-600">🏅 Dar Winner</button>
            <span>4 deram Winner</span>
          </div>
        </div>

        <div className="border-b py-3">
          <p className="text-sm">
            <span className="font-bold text-blue-700">Bruno</span> enfrentará <span className="font-bold text-gray-800">Henrique</span> amanhã às 18h
          </p>
          <div className="flex flex-col sm:flex-row gap-2 mt-2 text-sm text-gray-600">
            <button className="hover:text-green-600">🙌 Torcer por Bruno</button>
            <button className="hover:text-purple-700">🙌 Torcer por Henrique</button>
          </div>
          <p className="text-xs text-gray-500 mt-1">3 torcendo por Bruno • 1 por Henrique</p>
        </div>

        <div className="py-3">
          <p className="text-sm">
            <span className="font-bold text-blue-700">Marcos</span> se inscreveu no torneio <span className="font-semibold">“Uiner Finals Abril”</span>
          </p>
          <p className="text-xs text-gray-500">há 3 dias</p>
        </div>
      </section>
    </div>
  )
}
