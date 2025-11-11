import { routes } from "./mocks/routes/routes";
import { Trip } from "./Types/Trip";
import TripCard from "./components/TripCard";

export default function Home() {
  return (
    <div>
      <section>
        <h1 className="text-3xl font-bold mb-8">Discover Routes</h1>
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
      </section>
    </div>
  );
}
