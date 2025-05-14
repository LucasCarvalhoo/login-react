import { useState } from 'react'
import { LoginContainer } from "./components/LoginContainer/LoginContainer";
import { LoginHeader } from "./components/LoginHeader/LoginHeader";
import { LoginForm } from "./components/LoginForm/LoginForm";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4">
      <LoginContainer>
        <LoginHeader />
        <LoginForm />
      </LoginContainer>
    </div>
  )
}

export default App
