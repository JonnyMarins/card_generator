import { createContext, useContext, useEffect, useState } from "react";

const FlyContext = createContext();

const FlyProvaider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState("");
  const [filteredFly, setFilteredFly] = useState(null);

  const [fav, setFav] = useState([]);

  const accessKey = "1e9b21a9c32a78f597d6fd87b12a1bce";

  useEffect(() => {
    fetch(`https://api.aviationstack.com/v1/flights?access_key=${accessKey}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setFlights(data.data);
        }
      })
      .catch((error) => console.error("Errore nella richiesta:", error));
  }, []);

  function handleCerca(e) {
    setFilteredSearch();
    fetch(
      `https://api.aviationstack.com/v1/flights?access_key=${accessKey}&flight_iata=${e.target.value}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFilteredFly(data.data);
      })
      .catch((error) => console.error("Errore nella richiesta:", error));
  }

  const removeFromFavorites = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/favorites/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setFav(fav.filter((flight) => flight.id !== id));
      } else {
        console.error("Errore nella rimozione");
      }
    } catch (error) {
      console.error("Errore nella richiesta di rimozione:", error);
    }
  };

  return (
    <FlyContext.Provider
      value={{
        flights,
        filteredFly,
        handleCerca,
        removeFromFavorites,
        setFav,
        fav,
      }}
    >
      {children}
    </FlyContext.Provider>
  );
};

export default FlyProvaider;

export function useFly() {
  return useContext(FlyContext);
}
