import React from 'react';

export function LoginHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-200 mb-1">Faça seu login</h1>
        <p className="text-sm text-gray-400">Digite suas credenciais para acessar sua conta</p>
      </div>
      <button className="text-gray-400 p-2 rounded-full hover:bg-gray-800 transition-colors duration-200">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg>
      </button>
    </div>
  );
}