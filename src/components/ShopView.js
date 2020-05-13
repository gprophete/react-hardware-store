import React from 'react'
import ProductList from './ProductList.js'

export default class ShopView extends React.Component{
    render(){
        return(
            <div>
                <h2>Shop</h2>
                <div>{this.props.productComponents}</div>


            </div>
        )
    }

}