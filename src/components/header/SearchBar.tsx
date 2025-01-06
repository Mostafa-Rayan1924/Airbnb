import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between w-1/2 rounded-full px-4 py-2   border-2 border-border">
      <input
        type="search"
        className="w-full outline-none bg-transparent "
        placeholder=" Search"
      />
      <div className="size-8 aspect-square grid place-items-center rounded-full bg-primary">
        <IoSearchSharp size={16} className="text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
