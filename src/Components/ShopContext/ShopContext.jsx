import React, {createContext, useState, useEffect, Children} from 'react';

// create context
export const ShopContext = createContext();

//import product data
import {productsData} from '../../data'

const ShopContextProvider = ({children}) => {
    const [products, setProducts] = useState(productsData);
 
    return <ShopContext.Provider value={{products}} >
      {children}
  </ShopContext.Provider>
}

export default ShopContextProvider