import React from "react";
import InputField from './InputField/InputField.jsx';
import RememberMeCheckbox from './RememberMeCheckbox/RememberMeCheckbox.jsx';
import ForgotPasswordLink from './ForgotPasswordLink/ForgotPasswordLink.jsx';
import LoginButton from './LoginButton/LoginButton.jsx';
import SignUpPrompt from './SignUpPrompt/SignUpPrompt.jsx';

export function LoginForm() {
    return (
        <form>
            <InputField
                label="E-mail"
                type="email"
                placeholder="seu@email.com"
                icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                }
            />

            <InputField
                label="Senha"
                type="password"
                placeholder="••••••••"
                icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                }
            />

            <RememberMeCheckbox />
            <ForgotPasswordLink />
            <LoginButton />
            <SignUpPrompt />
        </form>
    );
};