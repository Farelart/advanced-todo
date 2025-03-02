import ToDo from "./ToDo";
import Footer from "./FootoDo";
import { getFilteredTodos } from "@/actions/actions";

type TodosProps = {
  filter?: 'All' | 'Active' | 'Completed'
}

export default async function ToDos({ filter = 'All' }: TodosProps) {
  // Get filtered todos based on the current filter
  const todos = await getFilteredTodos(filter);

  return (
    <section className="bg-[#25273D] text-[#a5a5b0] rounded-sm text-sm w-full">   
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <ToDo 
                        id={todo.id} 
                        title={todo.title}
                        completed={todo.completed}
                    />
                </li>
            ))}
            <Footer activeTodosCount={todos.filter(t => !t.completed).length} />
        </ul>
    </section>
  )
}

/* import ToDo from "./ToDo";
import { prisma } from "@/lib/db";
import Footer from "./FootoDo";

export default async function ToDos() {

  const todos = await prisma.todo.findMany()

  return (
    <section
        className="bg-[#25273D] text-[#a5a5b0] rounded-sm text-sm w-full"
    >   
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <ToDo 
                        id={todo.id} 
                        title={todo.title}
                        completed={todo.completed}
                    />
                </li>
            ))}

            {todos.length > 0 && <Footer />}
        </ul>
    </section>
  )
} */
