import { it } from "node:test";
import { searchDataItem } from "./types/types";
import Image from "next/image";
import { Star } from "lucide-react";

type Item = {
  // omit تعني باستثناء
  item: Omit<searchDataItem, "long" | "lat">;
};

const SearchCard = ({ item }: Item) => {
  return (
    <div className="p-2 relative sm:h-[200px]  rounded-lg hover:border-primary duration-300 border-2 border-border bg-background">
      <div className="flex flex-col sm:flex-row  gap-2 h-full relative">
        <Image
          width={200}
          height={200}
          src={item.img}
          className="rounded-lg h-[200px] sm:h-full w-full  sm:w-[40%]"
          alt={item.title}
        />
        <div className="flex flex-col justify-between space-y-2  flex-1">
          <div className="space-y-2">
            <p className="text-muted-foreground">{item.location}</p>
            <h2>{item.title}</h2>
            <p className="text-muted-foreground line-clamp-2">
              {item.description}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between    ">
              <div className="flex items-center   gap-1">
                <Star color="gold" /> {item.star}
              </div>
              <h2 className="text-2xl">{item.price}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
