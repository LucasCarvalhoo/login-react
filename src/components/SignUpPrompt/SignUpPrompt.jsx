import React from "react";

export function SignUpPrompt() {
    return (
        <div className="text-center text-sm">
            <span className="text-gray-400">Ainda não tenho uma conta. </span>
            <a href="#" className="text-purple-500 hover:text-purple-400 font-medium transition-colors duration-200">
                Cadastre-se
            </a>
        </div>
    );
}