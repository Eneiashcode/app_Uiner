export default function Login({ irPara }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-sm w-full text-center space-y-6 border border-blue-300">
        <h1 className="text-3xl font-bold text-blue-700">Uiner</h1>

        <input
          type="text"
          placeholder="E-mail"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          onClick={() => irPara('home')}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Entrar
        </button>

        <p className="text-sm text-gray-600">
          Não tem uma conta?{' '}
          <button
            onClick={() => irPara('escolherPerfil')}
            className="text-blue-700 font-medium hover:underline"
          >
            Cadastre-se
          </button>
        </p>
      </div>
    </div>
  )
}
