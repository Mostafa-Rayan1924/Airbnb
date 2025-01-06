import Image from "next/image";
import { liveDataItem } from "../types/types";

type Item = {
  item: liveDataItem;
};
const LiveCard = ({ item }: Item) => {
  return (
    <div className="space-y-2  group  ">
      <img
        src={item?.img}
        alt={item.title}
        className="object-fill rounded-lg group-hover:scale-105 overflow-hidden duration-300"
      />
      <h2 className="text-2xl font-medium">{item.title}</h2>
    </div>
  );
};

export default LiveCard;
