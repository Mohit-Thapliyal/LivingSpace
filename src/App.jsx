import { useEffect, useState } from "react";
import propertiesData from "./propertiesData";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";
import SearchAndFilter from "./components/SearchAndFilter";

function App() {
  const [activeNavbar, setActiveNavbar] = useState(1);
  const [data, setData] = useState(propertiesData);
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [price, setPrice] = useState("");
  const [proType, setProType] = useState("");

  useEffect(() => {
    console.log(searchText, location, bedrooms, price, proType);
  }, [searchText, location, bedrooms, price, proType]);

  const searchHandler = () => {
    let modifiedData = propertiesData;
    if (searchText && searchText !== "")
      modifiedData = modifiedData.filter((d) =>
        d.property_name.toLowerCase().includes(searchText.toLowerCase())
      );
    if (location && location !== "")
      modifiedData = modifiedData.filter((d) => d.state === location);
    if (bedrooms && parseInt(bedrooms) > 0)
      modifiedData = modifiedData.filter(
        (d) => parseInt(d.num_bedrooms) === parseInt(bedrooms)
      );
    if (price && price !== "") {
      var smaller = parseInt(price.split("-")[0]);
      var greater = parseInt(price.split("-")[1])
        ? parseInt(price.split("-")[1])
        : Number.MAX_SAFE_INTEGER;
      modifiedData = modifiedData.filter(
        (d) =>
          parseInt(d.price_per_month) >= smaller &&
          parseInt(d.price_per_month) < greater
      );
    }
    if (proType && proType !== "")
      modifiedData = modifiedData.filter((d) => d.property_type === proType);
    setData(modifiedData);
  };

  // const unique = [...new Set(data.map(item => item.property_type))];
  // console.log(unique)

  return (
    <div className="py-20 min-h-screen md:py-28 justify-center flex bg-[#f7f6ff]">
      <div className="absolute top-0 left-0 right-0">
        <Navbar activeNavbar={activeNavbar} setActiveNavbar={setActiveNavbar} />
      </div>
      <div className="w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col gap-5 ">
        <div className="md:sticky top-0 z-10 pt-2 pb-4 bg-[#f7f6ff]">
          <SearchAndFilter
            heading={`Search proterties to ${
              activeNavbar === 1 ? "rent" : activeNavbar === 2 ? "buy" : "sell"
            }`}
            searchText={searchText}
            setSearchText={setSearchText}
            setLocation={setLocation}
            setBedrooms={setBedrooms}
            setPrice={setPrice}
            setProType={setProType}
            searchHandler={searchHandler}
          />
        </div>
        <Properties propertiesData={data} />
      </div>
    </div>
  );
}

export default App;
