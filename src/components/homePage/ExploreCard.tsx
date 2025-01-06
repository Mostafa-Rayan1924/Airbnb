import Image from "next/image";
import { exploreDataItem } from "../types/types";

type Item = {
  item: exploreDataItem;
};
const ExploreCard = ({ item }: Item) => {
  return (
    <div className="flex items-center  gap-4 hover:bg-accent duration-300 overflow-hidden pe-1 rounded-lg">
      <div className="relative size-16 sm:size-20 flex-shrink-0 ">
        <Image
          className="rounded-lg "
          src={item.location == "Liverpool" ? "/41m.webp" : item?.img}
          alt={item?.location}
          fill
        />
      </div>
      <div>
        <h3 className="text-base break-words   sm:text-lg font-semibold">
          {item?.location}
        </h3>
        <p className="text-[12px] sm:text-sm text-muted-foreground">
          {item?.distance}
        </p>
      </div>
    </div>
  );
};

export default ExploreCard;
