export default function Home({ irPara }) {
  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <header className="bg-blue-700 text-white py-4 px-6 rounded-xl shadow mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Uiner 🎾</h1>
        <button
          onClick={() => irPara('login')}
          className="text-sm bg-white text-blue-700 px-3 py-1 rounded hover:bg-blue-100"
        >
          Sair
        </button>
      </header>

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

        {/* Jogo finalizado */}
        <div className="border-b py-3">
          <p className="text-sm">
            <span className="font-bold text-blue-700">Lucas</span> venceu <span className="font-bold text-gray-800">Rafael</span> por 6/4 6/3
          </p>
          <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
            <button className="hover:text-blue-600">🏅 Dar Winner</button>
            <span>4 deram Winner</span>
          </div>
        </div>

        {/* Jogo agendado */}
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

        {/* Outro evento */}
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
