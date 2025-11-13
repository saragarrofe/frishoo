"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const tripId = pathname.split("/").pop();

  return (
    <div>
      <h1>Trip {tripId} not found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
