import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchBar() {
  return (
    (<div className="mb-8">
      <form className="flex gap-2">
        <Input type="text" placeholder="Cerca voli..." className="flex-grow" />
        <Button type="submit">Cerca</Button>
      </form>
    </div>)
  );
}

