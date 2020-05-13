import React from 'react'
import ProductForm from './ProductForm.js'


export default class AdminView extends React.Component {
    render() {
        return (
            <div>
                <h1>Admin View</h1>
                <h2>Products</h2>
                <div></div>
                <div>
                    <button onDelete>
                        Delete
                    </button>
                </div>

                <h2> Create New Product</h2>
                {/* Created Product */}

                <ProductForm
                    addNewProductToProductList={this.props.addNewProductToProductList} />

            </div>
        )
    }
}