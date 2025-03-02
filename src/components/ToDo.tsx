"use client";

import Span from "./Span"
import { BsX } from "react-icons/bs"
import { deleteTodo } from "@/actions/actions"

type ToDoProps = {
  id: string
  title: string
  completed: boolean
}

export default function ToDo({ id, title, completed }: ToDoProps) {
  
  return (
    <div className="flex items-center px-3 py-4 text-[#a5a5b0] w-full border-b border-[#393A4B] group">
        <Span id={id}/>

        <p className={`w-full bg-transparent pt-0.5 outline-none 
                      ${completed ? "line-through text-[#494C6B]" : "text-white"}`}>
          {title}
        </p>
        <form action={deleteTodo.bind(null, id)}>
          <button className="group-hover:opacity-100 transition-opacity">
            <BsX size={24} className="text-[#494C6B] hover:text-white" />
          </button>
        </form>
    </div>
  )
}
