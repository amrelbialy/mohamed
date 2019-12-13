import React, { Component } from 'react'

export default class Hot extends Component {
    // eslint-disable-next-line react/require-render-return
    render() {
        const {modal}=this.props.modal
       // eslint-disable-next-line no-lone-blocks
       {if(!modal){
           return(
               <div>
                   hi
               </div>
           )
       }else{
           return(
               <div>
                modal off
            </div>
           )
       }
    }
    }
}


