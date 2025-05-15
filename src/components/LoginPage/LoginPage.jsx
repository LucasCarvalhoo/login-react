import { LoginContainer } from "../LoginContainer/LoginContainer"
import { LoginHeader } from "../LoginHeader/LoginHeader"
import { LoginForm } from "../LoginForm/LoginForm"
import { LoginFooter } from "../LoginFooter/LoginFooter"

export function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1b3e]">
      <LoginContainer>
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </LoginContainer>
    </div>
  )
}
