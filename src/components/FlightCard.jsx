import { useState } from "react";
import { Button } from "./ui/button";
import { useFly } from "@/context/FlyProvaider";

function FlightCard({ flight }) {
  const { removeFromFavorites } = useFly();
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorites = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/favorites",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(flight),
        }
      );

      if (response.ok) {
        setIsFavorite(true);
      } else {
        console.error("Errore nel salvataggio");
      }
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">
        {flight.airline.name} {flight.flight.iata}
      </h3>
      <p>
        Da: {flight.departure.airport} ({flight.departure.iata})
      </p>
      <p>
        A: {flight.arrival.airport} ({flight.arrival.iata})
      </p>
      <p>Stato: {flight.flight_status}</p>

      <Button
        onClick={addToFavorites}
        className={`mt-2 px-4 py-2 rounded ${
          isFavorite ? "bg-green-500 text-white" : "bg-blue-500 text-white"
        }`}
      >
        {isFavorite ? "Aggiunto" : "Aggiungi ai preferiti"}
      </Button>
      {isFavorite ? (
        <>
          <Button
            className="mt-2 px-4 py-2 rounded"
            onClick={() => removeFromFavorites()}
          >
            Rimuovi
          </Button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default FlightCard;
