export default function CadastroJogador({ irPara }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    // Aqui no futuro vamos salvar no banco
    console.log('Cadastro de jogador enviado')

    irPara('login')
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
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Sobrenome"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Criar uma senha"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

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
