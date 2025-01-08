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
      <div className="size-full ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.5851966824!2d0.06320785952400303!3d51.52852620095036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z2YTZhtiv2YbYjCDYp9mE2YXZhdmE2YPYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1736334981216!5m2!1sar!2seg"
          loading="lazy"
          className="w-full h-[600px] sticky top-[110px] rounded-lg border-2 border-border p-2 "></iframe>
      </div>
    </div>
  );
};

export default SearchPage;
