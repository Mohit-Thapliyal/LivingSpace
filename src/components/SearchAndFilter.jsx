import Button from "./UI/Button";

const SearchAndFilter = ({ heading,searchText, setSearchText, setLocation, setBedrooms, setPrice, setProType, searchHandler }) => {

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-0">
        <h2 className="font-medium tracking-wide self-start text-xl md:text-3xl [word-spacing:5px]">
          {heading}
        </h2>
        <input
          value={searchText}
          onChange={(e)=>setSearchText(e.target.value)}
          className="border-[1.5px] w-full focus:border-violet-600 outline-none rounded-md h-10 lg:w-60 text-sm font-medium text-gray-600 p-2 bg-white"
          type="text"
          name="searchText"
        />
      </div>
      <div className="hidden bg-white lg:flex items-center flex-row py-5 px-8 rounded-md justify-between h-fit">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-400">Location</p>
          <select onChange={(e)=>setLocation(e.target.value)} className="text-sm font-semibold -ml-1 outline-none">
            <option value="">Select</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="New York City">New York City</option>
            <option value="Denver">Denver</option>
            <option value="Beverly Hills">Beverly Hills</option>
            <option value="Miami">Miami</option>
            <option value="Seattle">Seattle</option>
            <option value="Austin">Austin</option>
            <option value="Aspen">Aspen</option>
            <option value="Chicago">Chicago</option>
            <option value="Honolulu">Honolulu</option>
            <option value="Charleston">Charleston</option>
            <option value="Lake Tahoe">Lake Tahoe</option>
          </select>
        </div>
        <div className="w-[1px] h-8 bg-gray-300" />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-400">
            Number of Bedrooms
          </p>
          <select onChange={(e)=>setBedrooms(e.target.value)} className="text-sm font-semibold -ml-1 outline-none">
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="w-[1px] h-8 bg-gray-300" />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-400">Price</p>
          <select onChange={(e)=>setPrice(e.target.value)} className="text-sm font-semibold -ml-1 outline-none">
            <option value="">Select</option>
            <option value="1000-2000">$1,000 - $2,000</option>
            <option value="2000-3000">$2,000 - $3,000</option>
            <option value="3000-5000">$3,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000"> &#60; $10,000</option>
          </select>
        </div>
        <div className="w-[1px] h-8 bg-gray-300" />
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-gray-400">Property Type</p>
          <select onChange={(e)=>setProType(e.target.value)} className="text-sm font-semibold -ml-1 outline-none">
            <option value="">Select</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="Studio">Studio</option>
            <option value="Loft">Loft</option>
          </select>
        </div>
        <div className="w-[1px] h-8 bg-gray-300" />
        <div className=" self-stretch">
          <Button onClick={searchHandler} className="px-10 py-4" filled={true}>
            Search
          </Button>
        </div>
      </div>

      <div className="flex bg-white lg:hidden gap-2 flex-col items-center py-5 px-5 rounded-md h-fit">
        <div className="flex justify-between w-full items-center">
          <div className="w-2/5">
            <p className="text-sm font-medium text-gray-400">Location</p>
            <select onChange={(e)=>setLocation(e.target.value)} className="text-sm font-semibold -ml-1 outline-none">
              <option value="">Select</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="New York City">New York City</option>
              <option value="Denver">Denver</option>
              <option value="Beverly Hills">Beverly Hills</option>
              <option value="Miami">Miami</option>
              <option value="Seattle">Seattle</option>
              <option value="Austin">Austin</option>
              <option value="Aspen">Aspen</option>
              <option value="Chicago">Chicago</option>
              <option value="Honolulu">Honolulu</option>
              <option value="Charleston">Charleston</option>
              <option value="Lake Tahoe">Lake Tahoe</option>
            </select>
          </div>
          <div className="w-[1px] h-8 bg-gray-300" />
          <div className="w-2/5">
            <p className="text-sm font-medium text-gray-400">
              Number of Bedrooms
            </p>
            <select onChange={(e)=>setBedrooms(e.target.value)} className="text-sm font-semibold -ml-1 outline-none">
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="w-2/5">
            <p className="text-sm font-medium text-gray-400">Price</p>
            <select onChange={(e)=>setPrice(e.target.value)} className="text-sm font-semibold -ml-1 outline-none">
            <option value="">Select</option>
            <option value="1000-2000">$1,000 - $2,000</option>
            <option value="2000-3000">$2,000 - $3,000</option>
            <option value="3000-5000">$3,000 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000"> &#60; $10,000</option>
            </select>
          </div>
          <div className="w-[1px] h-8 bg-gray-300" />
          <div className="w-2/5">
            <p className="text-sm font-medium text-gray-400">Property Type</p>
            <select onChange={(e)=>setProType(e.target.value)} className="text-sm font-semibold -ml-1 outline-none">
              <option value="">Select</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condo">Condo</option>
              <option value="Studio">Studio</option>
              <option value="Loft">Loft</option>
            </select>
          </div>
        </div>
        <div className="self-stretch mt-1">
          <Button onClick={searchHandler} className="w-full py-2" filled={true}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
