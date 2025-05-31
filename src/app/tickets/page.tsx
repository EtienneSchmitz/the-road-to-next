
import { Suspense } from "react";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
// import { ErrorBoundary } from "react-error-boundary";
// import { PlaceHolder } from "@/components/placeholder";

// export const dynamic = "force-dynamic"; // Force dynamic rendering for this page
// export const revalidate = 30; // Disable static generation for this page

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <Heading title="Tickets" description="All your tickets at one place" />
            
            {/* <ErrorBoundary fallback={<PlaceHolder label="Something went wrong while fetching tickets" />}> */}
                <Suspense fallback={<Spinner />}>
                    <TicketList />
                </Suspense>
            {/* </ErrorBoundary> */}
        </div>
    );
};

export default TicketsPage;

