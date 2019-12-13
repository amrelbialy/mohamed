import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'
import {ProductConsumer} from '../context';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{ 
                        const{modalOpen} = value
                     
                        return (
                          <React.Fragment>
                            {modalOpen ? (
                              <Title name="Hot" title="Drinks" />
                            ) : (
                              <Title name="Cold" title="Drinks" />
                            )}

                            <CartColumns />
                            <CartList value={value} />
                            <CartTotals
                              value={value}
                              history={this.props.history}
                            />
                          </React.Fragment>
                        );
                        
                    }}
                </ProductConsumer>
                
                
            </section>
        )
    }
}
