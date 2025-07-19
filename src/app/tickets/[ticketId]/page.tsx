import Link from "next/link";
import { PlaceHolder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { TicketItem } from "@/features/ticket/ticket-item";
import { ticketsPath } from "@/path";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

  if (!ticket) {
    return (
      <PlaceHolder
        label="Ticket not found"
        renderButton={(className: string) => (
          <Button asChild variant="outline" className={className}>
            <Link href={ticketsPath()}>Go back to tickets</Link>
          </Button>
        )}
      />
    );
  }

  return (
    <div className="flex justify-center animate-fade-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
