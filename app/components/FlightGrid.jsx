import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const flights = [
  { id: 1, name: "AZ1234", from: "Roma", to: "Milano", status: "In orario" },
  { id: 2, name: "FR5678", from: "Napoli", to: "Torino", status: "In ritardo" },
  { id: 3, name: "BA9012", from: "Venezia", to: "Palermo", status: "Cancellato" },
  { id: 4, name: "LH3456", from: "Firenze", to: "Bologna", status: "In orario" },
  { id: 5, name: "IB7890", from: "Bari", to: "Catania", status: "In partenza" },
  { id: 6, name: "EK1357", from: "Genova", to: "Cagliari", status: "Atterrato" },
]

export default function FlightGrid() {
  return (
    (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {flights.map((flight) => (
        <Card key={flight.id}>
          <CardHeader>
            <CardTitle>{flight.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Da: {flight.from}</p>
            <p>A: {flight.to}</p>
            <p>Stato: {flight.status}</p>
          </CardContent>
        </Card>
      ))}
    </div>)
  );
}

