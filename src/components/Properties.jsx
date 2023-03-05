import Property from "./Property"
import {BiError} from 'react-icons/bi'

const Properties = ({propertiesData}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 xl:gap-x-5 gap-y-7">
      {propertiesData.length > 1 ? propertiesData?.map((propertyData, index)=>(
        <Property key={propertyData.id} index={index} {...propertyData}/>
      )): <div className="flex col-span-full justify-center items-center flex-wrap text-violet-500 lg:gap-2"><BiError className="text-2xl"/>Property not found, please update the criteria</div>}
    </div>
  )
}

export default Properties