import React from "react";

export function InputField({ label, type, placeholder, icon }){
    return (
        <div className="mb-4">
            <label className="block text-gray-500 text-sm mb-2">
                {label}
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                    {icon}
                </div>
                <input
                    type={type}
                    className="w-full bg-gray-800 text-gray-300 border border-gray-700 rounded py-3 px-4 pl-10 focus:outline-none focus:border-purple-500"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};