import Link from "next/link";
import { PlaceHolder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { ticketsPath } from "@/path";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const ticket = await getTicket((await params).ticketId);

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
