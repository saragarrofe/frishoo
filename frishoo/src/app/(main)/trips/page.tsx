import TripCard from "@/app/components/TripCard";
import { routes } from "@/app/mocks/routes/routes";
import { Trip } from "@/app/Types/Trip";

export default function Trips() {
  return (
    <div>
      <h1>Trips Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {routes.map((route: Trip) => (
          <TripCard
            key={route.id}
            id={route.id}
            title={route.title}
            location={route.location}
            duration={route.duration}
            difficulty={route.difficulty}
            imageUrl={route.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
