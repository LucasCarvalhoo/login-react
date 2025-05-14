import React from "react";

export function LoginButton(){
    return (
        <button 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded flex items-center justify-center transition-colors duration-300"
            type="button">
            Entrar
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </button>
    );
}