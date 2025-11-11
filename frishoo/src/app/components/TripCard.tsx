import { Trip } from "../Types/Trip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function TripCard({
  id,
  title,
  location,
  duration,
  difficulty,
  imageUrl,
}: Trip) {
  return (
    <Link
      href={`/trips/${id}`}
      className="block hover:opacity-90 transition-opacity"
    >
      <Card className="overflow-hidden h-full">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>📍 {location}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-gray-600">
            <strong>Duration:</strong> {duration}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Difficulty:</strong> {difficulty}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
