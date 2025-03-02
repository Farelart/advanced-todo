import Image from "next/image";
import { BsSunFill } from "react-icons/bs";
import AddSpan from "@/components/AddSpan";
import ToDos from "../components/ToDos";
import { createTodo } from "@/actions/actions";

type ValidFilter = 'All' | 'Active' | 'Completed';

type SearchParams = {
  filter?: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  // Validate the filter parameter
  const validFilters: ValidFilter[] = ['All', 'Active', 'Completed'];
  const filter = validFilters.includes(searchParams?.filter as ValidFilter) 
    ? searchParams.filter as ValidFilter
    : 'All';

  return (
    <main className="text-white">
      <Image
        className="w-full"
        src="/Bitmap.png"
        alt="bitmap"
        width={1440}
        height={300}
      >
      </Image>

      <section className="w-[90%] md:w-[60%] mx-auto relative -top-[4rem] sm:-top-[5rem] lg:-top-[10rem]">
        <div className="flex justify-between items-center mb-5 sm:mb-8 md:mb-8">
          <h1 className="font-medium tracking-[0.25em] text-2xl">TODO</h1>
          <BsSunFill size={20}/>
        </div>

        <div className="flex flex-col gap-4">
          <form
            className="flex items-center bg-[#25273D] text-[#a5a5b0] px-3 py-4 rounded-sm text-sm w-full"
            action={createTodo}
          >
            <AddSpan />
            <input
              type="text"
              name="todo"
              className="w-full bg-transparent pt-0.5 outline-none placeholder:text-[#a5a5b0] text-white"
              placeholder="Create a new todo..."
              required
            />
          </form>

          <ToDos filter={filter} />
        </div>
      </section>
    </main>
  );
}