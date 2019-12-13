import React, { Component } from 'react'
import { hotProducts, coldProducts } from './data';

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
                 state = {
                   hotProducts: [],
                   coldProducts: [],
                   cart: [],
                   modalOpen: true,
                   cartSubTotal: 0,
                   cartTax: 0,
                   cartTotal: 0
                 };
                 componentDidMount() {
                   this.setProducts();
                 }
                 setProducts = () => {
                   let tempProducts = [];
                   let temp = [];
                   hotProducts.forEach(item => {
                     const singleItem = { ...item };
                     tempProducts = [...tempProducts, singleItem];
                   });

                   coldProducts.forEach(item => {
                     const singleItem = { ...item };
                     temp = [...temp, singleItem];
                   });
                   this.setState(() => {
                     return { hotProducts: tempProducts, coldProducts: temp };
                   });
                 };
                 handleHot = () => {
                   this.setState(() => {
                     return { modalOpen: true };
                   });
                 };
                 handleCold = () => {
                   this.setState(() => {
                     return { modalOpen: false };
                   });
                 };

                 incrementHot = id => {
                   let tempHot = [...this.state.hotProducts];
                   const selectedProduct = tempHot.find(item => item.id === id);
                   const index = tempHot.indexOf(selectedProduct);
                   const product = tempHot[index];
                   product.count = product.count + 1;
                   product.total = product.count * product.price;
                 this.setState(
                     () => {
                       return {
                         hotProducts: [...tempHot],
                       
                       };
                     },
                     () => {
                       this.addTotals();
                     }
                   );
                 };
                 decrementHot = id => {
                   let tempHot = [...this.state.hotProducts];
                   const selectedProduct = tempHot.find(item => item.id === id);
                   const index = tempHot.indexOf(selectedProduct);
                   const product = tempHot[index];
                   if(product.count === 0){

                   }else{
                   product.count = product.count - 1;
                   product.total = product.count * product.price;
                   }        

                   this.setState(
                     () => {
                       return {
                         hotProducts: [...tempHot],
                        
                       };
                     },
                     () => {
                       this.addTotals();
                     }
                   );
                 };


                 incrementCold = id => {
             

let tempCold = [...this.state.coldProducts];
 const selectedProducts = tempCold.find(
    item => item.id === id
);
const indexes = tempCold.indexOf(selectedProducts);
const products = tempCold[indexes];
products.count = products.count + 1;
products.total = products.count * products.price;

this.setState(
    () => {
    return {coldProducts: [...tempCold]
    };
},
() => {
 this.addTotals();
    }
);
};
decrementCold = id => {
let tempCold = [...this.state.coldProducts];
const selectedProducts = tempCold.find(item => item.id === id);
const indexes = tempCold.indexOf(selectedProducts);
const products = tempCold[indexes];
if (products.count === 0) {
} else {
  products.count = products.count - 1;
  products.total = products.count * products.price;
}        

this.setState(() => {return {coldProducts: [...tempCold]};
},() => {
this.addTotals();
}
);
};
addTotals = () => {
let subTotal = 0;
this.state.hotProducts.map(item => {
return (subTotal += item.total);
});
this.state.coldProducts.map(item => {
  return (subTotal += item.total);
});
const tempTax = subTotal * 0.1;
const tax = parseFloat(tempTax.toFixed(2));
const total = subTotal + tax;
this.setState(() => {
return {
cartSubTotal: subTotal,
cartTax: tax,
cartTotal: total
};
});
};
render() {
return (
<ProductContext.Provider
    value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        handleCold: this.handleCold,
        handleHot: this.handleHot,
        openSide: this.openSide,
        closeSide: this.closeSide,
        incrementHot: this.incrementHot,
        decrementHot: this.decrementHot,
        incrementCold: this.incrementCold,
        decrementCold: this.decrementCold,
                        
        }}
        >
                       {this.props.children}
                     </ProductContext.Provider>
                   );
                 }
               }

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer } 