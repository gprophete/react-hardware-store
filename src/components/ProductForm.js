import React from 'react'

export default class ProductForm extends React.Component {

    state = {
        newProduct: {
            productName: '',
            description: '',
            price: '',
        }
    }
    handleNewProductChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newProduct = { ...this.state.newProduct }
        newProduct[attributeName] = attributeValue
        this.setState({ newProduct })
    };
    addNewProduct = (event) => {
        event.preventDefault();
        this.props.addNewProductToProductList(this.state.newProduct)
    };

    render() {
        return (
            <div>
                <form onSubmit={this.addNewProduct}>
                    <div>
                        <input name='productName' type='text' placeholder='Name' value={this.state.newProduct.productName} onChange={this.handleNewProductChange} />
                    </div>
                    <div>
                        <input name='description' type='text' placeholder='description' value={this.state.newProduct.description} onChange={this.handleNewProductChange} />
                    </div>
                    <div>
                        <input name='price' type='number' min='0.00' step='0.01' placeholder='price' value={this.state.newProduct.price} onChange={this.handleNewProductChange} />
                    </div>
                    <div>
                        <input type='submit' value='Create New Product' />
                    </div>
                </form>
            </div>

        )
    }
}