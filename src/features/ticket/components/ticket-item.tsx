import clsx from "clsx";
import { LucideSquareArrowUpRight, LucideTrash } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket } from "@/generated/prisma/client";
import { ticketPath } from "@/paths";
import { deleteTicket } from "../actions/delete-ticket";
import { TICKET_ICONS } from "../constants";

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
}

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    const detailButton = (
        <Button asChild variant="outline" size="icon">
            <Link prefetch href={ticketPath(ticket.id)}>
                <LucideSquareArrowUpRight className="h-4 w-4" />
            </Link>
        </Button>
    )

    const deleteButton = (
        <form action={deleteTicket.bind(null, ticket.id)}>
            <Button variant="outline" size="icon" className="cursor-pointer">
                <LucideTrash className="h-4 w-4" />
            </Button>
        </form>
    )

    return (
        <div className={clsx("w-full flex gap-x-1", {
            "max-w-[580px]": isDetail,
            "max-w-[420px]": !isDetail,
        })}
        >
            <Card key={ticket.id} className="w-full">
                <CardHeader>
                    <CardTitle className="flex gap-x-2 items-center">
                        <p>{TICKET_ICONS[ticket.status]}</p>
                        <h3 className="text-xl truncate">{ticket.title}</h3>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className={clsx("whitespace-break-spaces", {
                        "line-clamp-3 ": !isDetail
                    })}
                    >
                        {ticket.content}
                    </p>
                </CardContent>
            </Card>
            <div className="flex flex-col gap-y-1">
                {isDetail ? deleteButton : detailButton}
            </div>
        </div>
    );
}

export { TicketItem }