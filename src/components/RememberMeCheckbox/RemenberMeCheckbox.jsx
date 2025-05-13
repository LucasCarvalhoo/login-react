import React from "react";

export function RememberMeCheckbox() {
    return (
      <div className="flex items-center mb-4">
        <input
          id="remember-me"
          type="checkbox"
          className="w-4 h-4 text-purple-500 bg-gray-800 border-gray-700 rounded focus:ring-purple-500"
        />
        <label htmlFor="remember-me" className="ml-2 text-sm text-gray-500">
          Lembrar-me
        </label>
      </div>
    );
  };