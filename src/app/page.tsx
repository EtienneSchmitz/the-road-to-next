import Link from "next/link";
import { ticketsPath } from "@/path";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-6xl">Home Page </h2>

      <Link href={ticketsPath()} className="underline">
        Go to Tickets
      </Link>
    </div>
  );
};

export default HomePage;
