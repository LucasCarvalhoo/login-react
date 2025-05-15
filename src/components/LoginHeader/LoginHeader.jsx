export function LoginHeader() {
  return (
    <div className="text-center mb-6">
      <div className="flex justify-center mb-4">
        <div className="bg-[#6c5dd3] w-12 h-12 rounded-lg flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-white">
            <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2zm10-8h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1z" />
          </svg>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-white mb-2">Acesso</h1>
      <p className="text-[#a8b3cf]">Entre para acessar sua conta</p>
    </div>
  )
}