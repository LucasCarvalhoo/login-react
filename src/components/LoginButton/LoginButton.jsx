import { ArrowRight } from "lucide-react"

export function LoginButton() {
  return (
    <button
      type="submit"
      className="w-full bg-[#6c5dd3] text-white py-3 px-4 rounded-lg hover:bg-[#5a4cbe] transition duration-300 flex items-center justify-center"
    >
      <span className="mr-2">Entrar</span>
      <ArrowRight className="h-5 w-5" />
    </button>
  )
}
