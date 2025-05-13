import React from "react";

export function LoginContainer ({ children }){
    return (
        <div className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg mx-auto">
            {children}
        </div>
    );
};