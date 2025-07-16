import React, {createContext, useState, useEffect, Children, use} from 'react';

// create context
export const ShopContext = createContext();

//import product data
import {productsData} from '../../data'

const ShopContextProvider = ({children}) => {
    const [products, setProducts] = useState(productsData);
    const [filteredProducts, setFilteredProducts] =useState(productsData);

    // functions to search product
    const searchProducts =(query) => {
       if (query === '') {
        setFilteredProducts(products);
       } else {
           const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
         );
         setFilteredProducts(filtered);
       }
    };

    // hero visibility 
    const [heroVisible, setHeroVisible] = useState(true)

    // cart state
    const [cart, setCart] = useState([])

    const [itemAmount, setItemAmount] = useState(0)

    const [total, setTotal] = useState(0)

    // a fxn that handles adding product to cart
    const addToCart = (product, id ) => {
      const newItem = { ...product, amount: 1}

      const cartItem = cart.find((item) => {
        return item.id === id;
      });

      // if the item truly exist, lets update the quantity
      if (cartItem){
         const newCart = [...cart].map((item) => {
             if (item.id === id) {
                return {...item, amount : cartItem.amount + 1};
             } else {
                  return item
             }
         });
         setCart(newCart)
      } else {
           setCart([...cart, newItem])
      }
    }

    // fxn to remove item from cart
    const removeFromCart = (id) =>{
       const newCart = cart.filter((item) => {
          return item.id !== id;
       });
       setCart(newCart)
    }

    // fxn to clear cart
    const clearCart = () => {
      setCart([]);
    }

    // get the total price
    useEffect(
      () => {
        const total = cart.reduce((accumulator, currentItem) =>{
          const priceAsNumber = parseFloat(currentItem.price);
          if (isNaN(priceAsNumber)){
             return accumulator
          }
          return accumulator + priceAsNumber * currentItem.amount;
        }, 0)
        setTotal(total);
      }, [cart]
    );

    // update item quantity in the cart
    useEffect(
        ()=> {
            if(cart) {
              const amount = cart.reduce((accumulator, currentItem) =>{
                 return accumulator + currentItem.amount;
              }, 0);
              setItemAmount(amount);
            }
        }, [cart]
    );

    // fxn responsible for increasing the quantity of a specific item
    const increaseAmount = (id) => {
      const cartItem = cart.find ((item) => item.id === id);
      addToCart(cartItem, id)
    }

    // fxn to reduce the quantity of a specific item in the cart
    const decreaseAmount = (id) => {
      const cartItem = cart.find((item) =>{
        return item.id === id;
      })

      if(cartItem) {
        const newCart = cart.map((item) =>{
          if (item.id === id){
            return {...item, amount : cartItem.amount -1};
          } else {
              return item;
          }
        });
        setCart(newCart);
      } else {
        if (cartItem.amount < 1) {
          removeFromCart(id);
        }
      }
    }

     
   
    return <ShopContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total, heroVisible, setHeroVisible, filteredProducts, searchProducts}} >
      {children}
  </ShopContext.Provider>
}

export default ShopContextProvider