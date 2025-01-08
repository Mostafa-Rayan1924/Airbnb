"use client";
import { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { enGB } from "date-fns/locale";
import { User2Icon } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SearchBar = () => {
  let [inp, setInp] = useState<string>("");
  let [numOfGuests, setNumOfGuests] = useState<number>(1);
  let pathName = usePathname();
  let [startDate, setStartDate] = useState(new Date());
  let [endDate, setEndDate] = useState(new Date());
  let [searchParams, setSearchParams] = useState<{ location?: string } | null>(
    null
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchParams({ location: params.get("location") || "" });
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-uk", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  let handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  return (
    <>
      <div className="flex items-center justify-between w-1/2 rounded-full px-4 py-2 border-2 border-border">
        <input
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          type="search"
          className="w-full outline-none bg-transparent"
          placeholder={
            pathName === "/search"
              ? `${searchParams?.location || ""} | ${formatDate(
                  startDate
                )} - ${formatDate(endDate)} | ${numOfGuests}`
              : "Search"
          }
        />
        <div className="size-8 aspect-square grid place-items-center rounded-full bg-primary">
          <IoSearchSharp size={16} className="text-white" />
        </div>
      </div>
      {inp && (
        <div className="absolute border-b-border border-2 rounded-lg top-[103%] left-1/2 translate-x-[-50%] p-2 bg-white">
          <DateRangePicker
            className="overflow-x-auto"
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#FD5B78"]}
            minDate={new Date()}
            locale={enGB}
          />
          <div className="flex items-center justify-between mb-4 px-4">
            <h2 className="text-black">Num Of Guests</h2>
            <div className="flex items-center gap-2">
              <User2Icon className="size-6 text-black" />
              <input
                className="border-border border text-black w-14 rounded-lg p-1 outline-none bg-transparent"
                value={numOfGuests}
                onChange={(e) => setNumOfGuests(Number(e.target.value))}
                type="number"
              />
            </div>
          </div>
          <div className="flex items-center justify-around px-4">
            <Button
              onClick={() => setInp("")}
              className={buttonVariants({ size: "sm", variant: "secondary" })}>
              Cancel
            </Button>
            <Link
              onClick={() => setInp("")}
              href={{
                pathname: "/search",
                search: `?location=${inp}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guests=${numOfGuests}`,
              }}>
              <Button className={buttonVariants({ size: "sm" })}>Search</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
