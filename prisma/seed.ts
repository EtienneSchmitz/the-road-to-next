import { PrismaClient, TicketStatus } from "@/generated/prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the first ticket from the database.",
    status: TicketStatus.DONE,
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from the database.",
    status: TicketStatus.OPEN,
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from the database.",
    status: TicketStatus.IN_PROGRESS,
  },
];

const seed = async () => {
  console.log("Seeding database with tickets...");
  console.time("Time taken to seed the database");

  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets,
  });

  console.log("Database seeded successfully with tickets !");
  console.timeEnd("Time taken to seed the database");
};

seed();
