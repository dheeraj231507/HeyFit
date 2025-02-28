"use server";

import prisma from "@/lib/prisma";
import { getDbUserId } from "./user.action";

interface CreateEventParams {
  name: string;
  location: string;
  date: Date;
  time: string;
  category: string;
  contact: string;
  players: string;
}

export async function createEvent({
  name,
  location,
  date,
  time,
  category,
  contact,
  players,
}: CreateEventParams) {
  try {
    const userId = await getDbUserId();

    if (!userId) {
      throw new Error("User ID is null");
    }

    const newEvent = await prisma.event.create({
      data: {
        name,
        location,
        date: new Date(date), // Convert date string to Date object
        time,
        category,
        contact,
        players: parseInt(players, 10), // Convert players string to number
        organizerId: userId, // ID of the user creating the event
      },
    });
  } catch (error) {
    console.error("Failed to create event:", error);
    return { success: false, error: "Failed to create event" };
  }
}

export async function getEvents() {
  try {
    const events = await prisma.event.findMany();
    return events;
  } catch (error) {
    console.error("Failed to fetch events:", error);
    return { success: false, error: "Failed to create event" };
  }
}
