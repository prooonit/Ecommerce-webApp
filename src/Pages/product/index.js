import { useEffect, useState } from "react";
import { FakeStoreApi } from "../../services";
import { useParams } from "react-router-dom";
import './product.css';
import { useCart } from "../../context/cart";

const SingleProduct = () => {
  const [product, setProduct] = useState(""); // Use useState correctly
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const {addToCart}= useCart();
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
    
        const product = await FakeStoreApi.fetchProductByid(productId);
        setProduct(product);
        setLoading(false);
    };

    fetchProduct().catch(console.error);
  }, [productId]); // Specify dependencies correctly
   if(!loading && !product){
    return (
      <div>
        product doesnot found 
      </div>
    )
   }
  return (
    <div>
      {loading?(
        alert("product is loading")
      ):
    <div className="max-w-screen-lg mx-auto flex mt-20">
    {/* Image */}
    <div className="w-2/7">
      <div className="image">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover " />
      </div>
    </div>
  
    {/* Titledes */}
    <div className="w-5/7 p-4">
      <div className="titledes ml-10">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <div className="text-gray-600">{product.description}</div>
        
        <div className="mt-5 font-bold">
          <div className="price">
            Price:  ₹{product.price}
          </div>
          <div className="addtocart   mt-2">

           <button className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-700 w-full" onClick={() => addToCart(product)}>Add to Cart</button>
</div>
        </div>
     
    </div>
    </div>
  </div>
  }
  </div>
  );
};

export default SingleProduct;
