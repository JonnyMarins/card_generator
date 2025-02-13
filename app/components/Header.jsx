import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    (<header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">VoLoco</h1>
        <nav>
          <Button variant="ghost" asChild className="mr-2">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/preferiti">Preferiti</Link>
          </Button>
        </nav>
      </div>
    </header>)
  );
}

