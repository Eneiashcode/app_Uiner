export default function EscolherPerfil({ irPara }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-sm w-full text-center space-y-6 border border-blue-300">
        <h1 className="text-3xl font-bold text-blue-700">Uiner</h1>
        <p className="text-gray-600">Como deseja se cadastrar?</p>

        <div className="space-y-4">
          <button
            onClick={() => irPara('cadastroOrganizador')}
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Sou Organizador
          </button>

          <button
            onClick={() => irPara('cadastroJogador')}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Sou Jogador
          </button>
        </div>

        <button
          onClick={() => irPara('login')}
          className="text-sm text-blue-700 mt-6 hover:underline"
        >
          Voltar para o login
        </button>
      </div>
    </div>
  )
}
