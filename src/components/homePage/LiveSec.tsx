import { getLiveData } from "@/api/app";
import Title from "../Sharable/Title";
import LiveCard from "./LiveCard";
import { liveDataParent } from "../types/types";

const LiveSec = async () => {
  let liveData: liveDataParent = await getLiveData();
  return (
    <div className="container">
      <Title title="Live Anywhere" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {liveData.map((item) => {
          return <LiveCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default LiveSec;
