import { useState } from "react"
import { InputField } from "../InputField/InputField"
import { PasswordField } from "../PasswordField/PasswordField"
import { RemenberMeCheckbox } from "../RememberMeCheckbox/RemenberMeCheckbox"
import { ForgotPasswordLink } from "../ForgotPasswordLink/ForgotPasswordLink"
import { LoginButton } from "../LoginButton/LoginButton"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password, rememberMe })
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        icon="mail"
        required/>
      <PasswordField 
        label="Senha" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required/>
      <div className="flex items-center justify-between">
        <RemenberMeCheckbox 
          checked={rememberMe} 
          onChange={() => setRememberMe(!rememberMe)}/>
        <ForgotPasswordLink />
      </div>
      <LoginButton />
    </form>
  )
}