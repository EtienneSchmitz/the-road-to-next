import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";
import { LucideSquareArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TicketItemProps = {
    ticket: Ticket
}

const TicketItem = ({ ticket }: TicketItemProps) => {
    const detailButton = (
        <Button asChild variant="outline" size="icon">
            <Link href={ticketPath(ticket.id)}>
                <LucideSquareArrowUpRight className="h-4 w-4" />
            </Link>
        </Button>
    )

    return (
        <div className="w-full max-w-[420px] flex gap-x-1">
            <Card key={ticket.id} className="w-full">
                <CardHeader>
                    <CardTitle className="flex gap-x-2 items-center">
                        <p>{TICKET_ICONS[ticket.status]}</p>
                        <h3 className="text-xl truncate">{ticket.title}</h3>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="line-clamp-3 whitespace-break-spaces">
                        {ticket.content}
                    </p>
                </CardContent>
            </Card>
            <div className="flex flex-col gap-y-1">
                {detailButton}
                {detailButton}
            </div>
        </div>
    );
}

export { TicketItem }