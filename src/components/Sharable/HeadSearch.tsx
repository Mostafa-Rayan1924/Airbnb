"use client";

import { useSearchParams } from "next/navigation";

const HeadSearch = () => {
  const searchParams = useSearchParams();
  return (
    <div className="space-y-2">
      <p className="text-sm sm:text-base text-muted-foreground">
        +300 stays - {searchParams.get("startDate")?.slice(0, 10)} to{" "}
        {searchParams.get("endDate")?.slice(0, 10)} - for{" "}
        {searchParams.get("guests")} Guests
      </p>
      <h2 className="text-2xl md:text-3xl">
        Stays in {searchParams.get("location")}
      </h2>
    </div>
  );
};

export default HeadSearch;
