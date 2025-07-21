"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/path";

const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: { id },
  });

  redirect(ticketsPath());
};

export { deleteTicket };
