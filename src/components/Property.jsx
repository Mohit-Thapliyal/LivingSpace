import { BiBed, BiBath, BiLayer } from "react-icons/bi";

const Property = ({
  image,
  property_name,
  price_per_month,
  location,
  state,
  num_bedrooms,
  num_bathrooms,
  size_sqm,
  property_type
}) => {
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div className="h-48 relative">
        <img
          className=" object-fill h-full w-full"
          src={image}
          alt={property_name}
        />
      </div>
      <div className="px-4 py-5 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-400">
            <span className="text-violet-600 text-xl font-semibold">
              ${price_per_month}
            </span>{" "}
            /month
          </p>
          <p className="bg-violet-100 text-sm text-violet-600 px-2 py-1 rounded-sm font-medium">{property_type}</p>
        </div>

        <p className="text-lg font-bold">{property_name}</p>
        <p className="text-sm font-medium text-gray-400">
          {location}, {state}, USA
        </p>
        <div className="w-full bg-gray-200 h-[1.5px] my-2" />
        <div className="flex justify-between text-sm font-medium text-gray-400">
          <span className="flex justify-center items-center gap-1">
            <BiBed className="text-xl text-violet-600" /> {num_bedrooms} Beds
          </span>
          <span className="flex justify-center items-center gap-1">
            <BiBath className="text-xl text-violet-600" />
            {num_bathrooms} Bathrooms
          </span>
          <span className="flex justify-center items-center gap-1">
            <BiLayer className="text-xl text-violet-600" />
            <span>
              {size_sqm / 10}
              <span className="font-mono text-xs font-semibold">x</span>10m
              <sup>2</sup>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Property;
