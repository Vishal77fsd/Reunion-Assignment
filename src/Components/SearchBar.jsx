const SearchBar = () => {
  return (
    <div className="p-10 w-[90%] m-auto flex justify-between items-center border rounded-sm bg-blue-100">
      <h1 className="text-2xl font-bold">Search properties to rent</h1>
      <select
        name="search"
        id="search"
        className="border border-blue-600 focus:outline-none p-2 rounded-md"
      >
        <option value="searchbar">Search with Search bar</option>
        <option value="searchbylocation">Search by Location</option>
      </select>
    </div>
  );
};

export default SearchBar;
