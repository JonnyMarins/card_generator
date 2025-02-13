import { useFly } from "@/context/FlyProvaider";
import { Input } from "./ui/input";

function SearchBar() {
  const { handleCerca } = useFly();

  return (
    <div className="mb-8">
      <form className="flex gap-2">
        <Input
          type="text"
          placeholder="Cerca voli..."
          className="flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onBlur={handleCerca}
        />
      </form>
    </div>
  );
}

export default SearchBar;
