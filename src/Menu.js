import React, { Component } from 'react'
import Hot from './Hot'
import img from './images/pepsi.jpg'
import Cart from './Cart/Cart';
import { ProductConsumer } from './context';
export default class Menu extends Component {
              
             
            
             
                 render() {
                   return (
                     <React.Fragment>
                       <ProductConsumer>
                         {value =>{
                           return (
                             <div>
                               <ul>
                                 <li
                                   onClick={() => {
                                     value.handleHot();
                                   }}
                                 >
                                   <a className="active">Hot Drinks</a>
                                 </li>
                                 <li
                                   onClick={() => {
                                     value.handleCold();
                                   }}
                                 >
                                   <a>Cold Drinks</a>
                                 </li>
                                
                               </ul>
                             </div>
                           );
                         }}
                        
                       </ProductConsumer>
                       <div>
                         <Cart />
                       </div>
                     </React.Fragment>
                   );
                 }
               }

