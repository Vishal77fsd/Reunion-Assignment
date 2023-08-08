import { BsFillBuildingFill } from "react-icons/bs";
import SearchBar from "./SearchBar";
import FilterSearchBar from "./FilterSearchBar";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-6">
        <div className="flex gap-4">
          <div className="flex items-center font-bold p-2 cursor-pointer">
            <BsFillBuildingFill />
            <h1>Estatery</h1>
          </div>
          <div className="bg-blue-200 p-2 rounded-md text-blue-700 font-semibold cursor-pointer">
            Rent
          </div>
          <div className="p-2 cursor-pointer">Buy</div>
          <div className="p-2 cursor-pointer">Sell</div>
          <div className="p-2 cursor-pointer">Manage Property</div>
        </div>
        <div className="flex gap-2">
          <div className="p-2 border rounded-md border-blue-500 text-blue-500 font-semibold cursor-pointer">
            Login
          </div>
          <div className="p-2 border rounded-md border-blue-500 bg-[#7065ED] text-white cursor-pointer">
            Sign up
          </div>
        </div>
      </div>

      <SearchBar />
      <br />
      <FilterSearchBar />
      <br />
    </div>
  );
};

export default Navbar;
