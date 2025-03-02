"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  await prisma.todo.create({
    data: {
      title: formData.get("todo") as string,
    }
  })

  revalidatePath("/")
}

export async function deleteTodo(id: string) {
  await prisma.todo.delete({
    where: {
      id
    }
  })

  revalidatePath("/")
}

export async function clearCompleted() {
  await prisma.todo.deleteMany({
    where: {
      completed: true
    }
  })

  revalidatePath("/")
}

export async function toggleTodo(id: string) {
  const todo = await prisma.todo.findUnique({
    where: {
      id
    }
  })

  await prisma.todo.update({
    where: {
      id
    },
    data: {
      completed: !todo?.completed
    }
  })

  revalidatePath("/")
}

export async function getFilteredTodos(filter: 'All' | 'Active' | 'Completed') {
  switch (filter) {
    case 'Active':
      return await prisma.todo.findMany({
        where: {
          completed: false
        }
      });
    case 'Completed':
      return await prisma.todo.findMany({
        where: {
          completed: true
        }
      });
    default:
      return await prisma.todo.findMany();
  }
}