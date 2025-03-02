"use client";

import { useState } from "react"
import { BsCheck } from "react-icons/bs"
import { toggleTodo } from "@/actions/actions";

type SpanProps = {
    id: string
    initialChecked?: boolean
}

export default function Span({ id, initialChecked }: SpanProps) {
    const [checked, setChecked] = useState(initialChecked)

    const handleClick = (/* e: React.MouseEvent<HTMLSpanElement> */) => {
        setChecked(!checked)
        toggleTodo(id)
    }

    return (
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
    )
}
