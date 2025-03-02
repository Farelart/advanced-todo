"use client";

import { useState} from "react"
import { BsCheck } from "react-icons/bs"

export default function Span() {
    const [checked, setChecked] = useState(false)
    const [error, setError] = useState(false)

    const handleClick = async (e: React.MouseEvent<HTMLSpanElement>) => {
        const form = (e.target as HTMLElement).closest('form')
        if (form) {
            const input = form.querySelector('input[name="todo"]') as HTMLInputElement
            if (!input.value.trim()) {
                setError(true)
                setTimeout(() => setError(false), 3000)
                return
            }
            setChecked(true)
            await form.requestSubmit()
            setChecked(false)
            input.value = '' // Clear the input after submission
        }
    }

    return (
        <div className="">
            <span 
                className={`w-5 h-5 flex items-center justify-center rounded-full cursor-pointer transition-all mr-4
                ${checked 
                    ? "bg-gradient-to-br from-[#57DDFF] to-[#C058F3] text-white"
                    : "border border-[#393A4B]"}`
                }
                onClick={handleClick}
            >
                {checked && <BsCheck size={14} strokeWidth={3} />}
            </span>
            {error && (
                <div className="absolute -bottom-6 left-0 text-red-500 text-xs">
                    Please type something first
                </div>
            )}
        </div>
    )
}