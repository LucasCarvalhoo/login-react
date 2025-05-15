"use client"

import { useState } from "react"
import { Lock, Eye, EyeOff } from "lucide-react"

export function PasswordField({ label, value, onChange, required = false }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-2">
      <label className="block text-[#a8b3cf] text-sm">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Lock className="h-5 w-5 text-[#6c5dd3]" />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder="••••••••"
          required={required}
          className="w-full pl-10 pr-10 py-3 bg-[#1e2140] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c5dd3]"
        />
        <button
          type="button"
          className="absolute inset-y-0 right-3 flex items-center"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff className="h-5 w-5 text-[#a8b3cf]" /> : <Eye className="h-5 w-5 text-[#a8b3cf]" />}
        </button>
      </div>
    </div>
  )
}
