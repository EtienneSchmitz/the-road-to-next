import { initialTickets } from "@/data";
import { Ticket } from "../types";

export const getTickets = async (): Promise<Ticket[]> => {
    
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
    
    // throw new Error("Network error occurred while fetching tickets"); // Simulate a network error

    return new Promise((resolve) => {
        resolve(initialTickets);
    });
};