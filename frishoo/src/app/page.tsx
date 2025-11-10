import Image from "next/image";
import { routes } from "./mocks/routes/routes";

export default function Home() {
  return (
    <div>
      <section>
        <h1 className="text-3xl font-bold mb-8">Discover Routes</h1>

        {/* El grid va FUERA del map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <Image
                src={route.imageUrl}
                alt={route.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{route.title}</h2>
                <p className="text-gray-600">📍 {route.location}</p>
                <p className="text-gray-600">⏱️ {route.duration}</p>
                <p className="text-gray-600">🏔️ {route.difficulty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
