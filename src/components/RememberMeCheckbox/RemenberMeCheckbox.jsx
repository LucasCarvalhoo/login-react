"use client"

export function RemenberMeCheckbox({ checked, onChange }) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div className="relative">
        <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
        <div
          className={`w-5 h-5 border-2 rounded ${checked ? "bg-[#6c5dd3] border-[#6c5dd3]" : "border-[#a8b3cf] bg-transparent"} flex items-center justify-center`}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="text-sm text-[#a8b3cf]">Lembrar-me</span>
    </label>
  )
}
2