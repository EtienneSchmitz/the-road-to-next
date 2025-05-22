import clsx from "clsx";
import { LucideSquareArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
}

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    const detailButton = (
        <Button asChild variant="outline" size="icon">
            <Link href={ticketPath(ticket.id)}>
                <LucideSquareArrowUpRight className="h-4 w-4" />
            </Link>
        </Button>
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
            {isDetail ? null : (<div className="flex flex-col gap-y-1">
                {detailButton}
            </div>)}
        </div>
    );
}

export { TicketItem }