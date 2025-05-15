"use client"

import { Mail } from "lucide-react"

export function InputField({ label, type = "text", value, onChange, placeholder, icon, required = false }) {
  return (
    <div className="space-y-2">
      <label className="block text-[#a8b3cf] text-sm">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Mail className="h-5 w-5 text-[#6c5dd3]" />
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full pl-10 pr-3 py-3 bg-[#1e2140] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c5dd3]"/>
      </div>
    </div>
  )
}