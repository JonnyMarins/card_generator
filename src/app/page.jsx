import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import FlightGrid from "./components/FlightGrid"

export default function Home() {
  return (
    (<div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchBar />
        <FlightGrid />
      </main>
    </div>)
  );
}

