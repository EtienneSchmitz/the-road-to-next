import { initialTickets } from "@/data"
import { Ticket } from "../types";

export const getTicket = async (ticketId: string) : Promise<Ticket | null>=> {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay

    // throw new Error("Network error occurred while fetching tickets"); // Simulate a network error

    const maybeTicket = initialTickets.find((ticket) => ticket.id === ticketId);
    
    return new Promise((resolve) => {
        return resolve(maybeTicket || null);
    });
}