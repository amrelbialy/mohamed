import React from 'react'

export default function CartItem({item , value}) {
    const {id,title,img,price,total,count} = item;
    const{incrementHot ,decrementHot,incrementCold,decrementCold,modalOpen}=value
    return (
      <div className="row my-2  text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
          <img
            src={img}
            alt="product"
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product:</span>
          {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product:</span>
          {price}
        </div>
        {modalOpen ? (
          <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <span
              className="btn btn-black mx-1"
              onClick={() => decrementHot(id)}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => incrementHot(id)}
            >
              +
            </span>
          </div>
        ) : (
          <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <span
              className="btn btn-black mx-1"
              onClick={() => decrementCold(id)}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => incrementCold(id)}
            >
              +
            </span>
          </div>
        )}

        <div className="col-10 mx-auto col-lg-2">
          <strong>item total : $ {total}</strong>
        </div>
      </div>
    );
}
