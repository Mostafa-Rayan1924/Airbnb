"use client";

import { useSearchParams } from "next/navigation";

const HeadSearch = () => {
  const searchParams = useSearchParams();

  // Get values from searchParams or set default values
  const startDate = searchParams.get("startDate")?.slice(0, 10) || "N/A";
  const endDate = searchParams.get("endDate")?.slice(0, 10) || "N/A";
  const guests = searchParams.get("guests") || "0";
  const location = searchParams.get("location") || "Unknown location";

  return (
    <div className="space-y-2">
      <p className="text-sm sm:text-base text-muted-foreground">
        +300 stays - {startDate} to {endDate} - for {guests} Guests
      </p>
      <h2 className="text-2xl md:text-3xl">Stays in {location}</h2>
    </div>
  );
};

export default HeadSearch;
