import React, { createContext, useState } from 'react';



const PRODUCT_CONTEXT = createContext();

const ProductProvider = () => {
  const [state,setState] = useState([0]);
  
  return (
    <div>ProductProvider</div>
  )
}

export default ProductProvider