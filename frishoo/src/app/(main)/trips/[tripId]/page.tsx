import { notFound } from "next/navigation";

export default async function TripDetail({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const tripId = (await params).tripId;
  if (!tripId || isNaN(Number(tripId))) {
    notFound();
  }

  return (
    <div>
      <h1>Trip Detail for Trip ID: {tripId}</h1>
    </div>
  );
}
