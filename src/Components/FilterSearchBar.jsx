import { useEffect, useState } from "react";
import Home from "./Home";
import constantData from "../Constants/data";

const FilterSearchBar = () => {
  const [search, setSearch] = useState({});
  const [location, setLocation] = useState("India");
  const [price, setPrice] = useState("1000-5000");
  const [type, setType] = useState("houses");
  const [data, setData] = useState([]);

  const handleSumbit = (e) => {
    e.preventDefault();
    setSearch({
      location,
      price,
      type,
    });

    setData(constantData);
  };

  useEffect(() => {
    // console.log(search);
    setData(
      data.filter(
        (d) =>
          d.location.country.toLowerCase() === search.location.toLowerCase() &&
          d.price.toLowerCase() === search.price.toLowerCase() &&
          d.type.toLowerCase() &&
          search.type.toLowerCase()
      )
    );
  }, [search, setSearch, data]);

  return (
    <div>
      <form onSubmit={() => handleSumbit(event)}>
        <div className="bg-blue-200 w-[90%] m-auto p-4 flex flex-wrap justify-between items-center">
          <div className="flex gap-4">
            <div className="relative p-2">
              <select
                value={location || "new york"}
                onChange={(e) => setLocation(e.target.value)}
                className="p-2 focus:outline-none rounded-sm"
              >
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="thailand">Thailand</option>
              </select>
            </div>
            <div className="relative p-2">
              <select
                value={price || "1000-5000"}
                onChange={(e) => setPrice(e.target.value)}
                className="p-2 focus:outline-none rounded-sm"
              >
                <option value="1000-5000">₹1,000 - ₹5,000</option>
                <option value="5000-10000">₹5,000 - ₹10,000</option>
                <option value="10000-15000">₹10,000 - ₹15,000</option>
                <option value="15000-20000">₹15,000 - ₹20,000</option>
              </select>
            </div>
            <div className="relative p-2">
              <select
                value={type || "houses"}
                onChange={(e) => setType(e.target.value)}
                className="p-2 focus:outline-none rounded-sm"
              >
                <option value="houses">Houses</option>
                <option value="villa">Villa</option>
              </select>
            </div>
          </div>
          <div>
            <button
              className="p-2  bg-[#7064F0] rounded-md text-white"
              type="submit"
            >
              Search
            </button>

            <button
              className="p-2  bg-red-600 rounded-md text-white ml-2"
              type="reset"
              onClick={() =>
                setSearch({
                  location: "new york,usa",
                  type: "houses",
                  price: "1000-5000",
                })
              }
            >
              Clear
            </button>
          </div>
        </div>
      </form>

      <Home data={data} />
    </div>
  );
};

export default FilterSearchBar;
