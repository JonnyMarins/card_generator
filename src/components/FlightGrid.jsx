import { useFly } from "@/context/FlyProvaider";
import FlightCard from "./FlightCard";

function FlightGrid() {
  const { flights, filteredFly } = useFly();

  if (!flights || flights.length === 0) return <p>Caricamento...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {console.log(filteredFly)}
      {filteredFly
        ? filteredFly.map((flight, i) => <FlightCard key={i} flight={flight} />)
        : flights.map((flight, i) => <FlightCard key={i} flight={flight} />)}
    </div>
  );
}

export default FlightGrid;
