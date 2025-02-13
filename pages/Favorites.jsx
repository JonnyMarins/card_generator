import { Button } from "@/components/ui/button";
import { useFly } from "@/context/FlyProvaider";
import { useState, useEffect } from "react";

const Favorites = () => {
  const { removeFromFavorites, setFav, fav } = useFly();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/favorites"
        );
        if (response.ok) {
          const data = await response.json();
          setFav(data);
        } else {
          console.error("Errore nel recupero dei preferiti");
        }
      } catch (error) {
        console.error("Errore nella richiesta:", error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div>
      {fav.map((flight) => (
        <div key={flight.id} className="bg-white rounded-lg shadow-md p-4">
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
            onClick={() => removeFromFavorites(flight.id)}
            className="mt-2 px-4 py-2 rounded bg-red-500 text-black"
          >
            Rimuovi dai preferiti
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
