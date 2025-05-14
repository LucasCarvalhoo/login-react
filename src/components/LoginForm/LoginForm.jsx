import React from "react";
import { InputField } from "../InputField/InputField";
import { RememberMeCheckbox } from "../RememberMeCheckbox/RemenberMeCheckbox";
import { ForgotPasswordLink } from "../ForgotPasswordLink/ForgotPasswordLink";
import { LoginButton } from "../LoginButton/LoginButton";
import { SignUpPrompt } from "../SignUpPrompt/SignUpPrompt";

export function LoginForm() {
  return (
    <form className="space-y-6">
      <InputField
        label="E-mail"
        type="email"
        placeholder="seu@email.com"
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        }
      />

      <InputField
        label="Senha"
        type="password"
        placeholder="••••••••"
        icon={
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
        }
      />

      <div className="flex justify-between items-center">
        <RememberMeCheckbox />
        <ForgotPasswordLink />
      </div>
      
      <LoginButton />
      
      <div className="mt-8">
        <SignUpPrompt />
      </div>
    </form>
  );
}