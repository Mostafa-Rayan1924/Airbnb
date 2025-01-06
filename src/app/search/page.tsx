import { getSearchData } from "@/api/app";
import SearchCard from "@/components/SearchCard";
import HeadSearch from "@/components/Sharable/HeadSearch";
import { searchDataParent } from "@/components/types/types";

const SearchPage = async () => {
  let data: searchDataParent = await getSearchData();
  return (
    <div className="my-[120px] w-[85%] m-auto  grid grid-cols-1 lg:grid-cols-2 gap-4 ">
      <div className="space-y-4">
        <HeadSearch />
        <div className="grid grid-cols-1 gap-4">
          {data?.map((item) => (
            <SearchCard item={item} />
          ))}
        </div>
      </div>
      <div className="">s</div>
    </div>
  );
};

export default SearchPage;
