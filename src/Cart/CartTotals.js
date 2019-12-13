import React from 'react'

export default function CartTotals({value , history}) {
    const{cartSubTotal,cartTax, cartTotal} = value;
    return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    
                    <button 
                    type="button" 
                    className="btn btn-outline-danger text-uppercase mb-3 px-5">
                    Print 
                    </button>
                    
                    <h5>
                        <span className="text-title">subTotal :</span>
                        <strong>$ {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">Tax :</span>
                        <strong>$ {cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">total :</span>
                        <strong>$ {cartTotal}</strong>
                    </h5>
                  
                </div>
            </div>
        </div>
    </React.Fragment>  
    )
}
