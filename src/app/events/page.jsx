// app/users/page.tsx
import React from "react";
import { getEvents } from "@/actions/events.action";

export default async function UsersPage() {
  // Fetch events from the database
  const events = await getEvents();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-200 mb-6">Event Details</h1>
      <div className="space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="space-y-4">
              <div className="text-gray-700">
                <span className="font-semibold">Name:</span> {event.name}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">Location:</span>{" "}
                {event.location}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">Date:</span>{" "}
                {event.date.toLocaleDateString()}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">Time:</span> {event.time}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">Category:</span>{" "}
                {event.category}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">Contact:</span> {event.contact}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">Players:</span> {event.players}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
