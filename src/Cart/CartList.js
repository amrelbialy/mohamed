import React from 'react'
import CartItem from "./CartItem"
export default function CartList({value}) {
   const {hotProducts, coldProducts ,modalOpen} = value
 
     if(modalOpen){
      return (
        <div className="container-fluid">
          {hotProducts.map(item => {
            return <CartItem key={item.id} item={item} value={value} />;
          })}
        </div>
      );
     }else{
      return (
        <div className="container-fluid">
          {coldProducts.map(item => {
            return <CartItem key={item.id} item={item} value={value} />;
          })}
        </div>
      );
     }
    
}
