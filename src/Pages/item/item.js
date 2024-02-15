import React from "react";
import { Link } from "react-router-dom";


const Item = ({data, addToCart}) => {
    if (!data) {
        return null; // or handle the case when 'data' is not defined
      }
    const {id, image,title,price}=data;

    function shortenString(originalString, maxLength = 12) {
      if (originalString.length <= maxLength) {
        return originalString;
      }
    
      return originalString.substring(0, maxLength) + "..";
    }

  return (
    <div className="w-60 h-80 mx-3 my-5 " >
      <div className="w-60 h-60">

       <img src={image} alt={title} className="w-60 h-60 object-contain"/>

     

      </div>
  <div className="mt-2 flex justify-between">
    <div className="font-bold text-lg ">
    <Link to={`/product/${id}`}>

        {shortenString(title)}
    </Link>
        </div>
    <h2 className="text-xl font-bold mx-2" >₹{price}</h2>
  </div>
  <div className="items-center  mt-2">

    <button className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-700 w-full" onClick={addToCart}>Add to Cart</button>
  </div>
</div>

  )
}
export default Item