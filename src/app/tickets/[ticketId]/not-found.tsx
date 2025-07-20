import Link from "next/link";
import { PlaceHolder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { ticketsPath } from "@/path";

export default function NotFound() {
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
