import { getExploreData } from "@/api/app";
import Title from "../Sharable/Title";
import ExploreCard from "./ExploreCard";
import { exploreDataParent } from "../types/types";

const ExploreNearby = async () => {
  let exploreData: exploreDataParent = await getExploreData();
  return (
    <div className="container">
      <Title title="Explore Nearby" />
      <div className="grid explore grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {exploreData.map((item) => {
          return <ExploreCard item={item} />;
        })}
      </div>
    </div>
  );
};

export default ExploreNearby;
