"use client";
/* import { useState } from "react"; */
import { clearCompleted } from "@/actions/actions";
import { useRouter, useSearchParams } from "next/navigation";

type FooterProps = {
    activeTodosCount: number
}

export default function Footer({ activeTodosCount }: FooterProps) {
  /* const [activeFilter, setActiveFilter] = useState("All");
  const router = useRouter(); */
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get('filter') || 'All';

  const handleFilterChange = (filter: string) => {
    // Update URL with new filter
    router.push(`/?filter=${filter}`);
  };

  /* const handleFilterChange = async (filter: string) => {
    setActiveFilter(filter);
    await getFilteredTodos(filter as 'All' | 'Active' | 'Completed');
    router.refresh();
  }; */

  return (
    <div className="flex justify-between items-center text-sm text-[#a5a5b0] w-full py-3 px-4 bg-[#25273D] rounded-sm">
        {/* Left Section: Items Left */}
        <span>{activeTodosCount} items left</span>

        {/* Middle Section: Filters */}
        <div className="flex space-x-4">
            {["All", "Active", "Completed"].map((filter) => (
                <button
                    key={filter}
                    className={`${
                    currentFilter === filter ? "text-[#3A7CFD]" : "hover:text-white"
                    } transition-colors`}
                    onClick={() => handleFilterChange(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>

        {/* Right Section: Clear Completed */}
        <form action={clearCompleted}>
        <button 
          className="hover:text-white transition-colors"
          type="submit"
        >
          Clear Completed
        </button>
      </form>
    </div>
  )
}
