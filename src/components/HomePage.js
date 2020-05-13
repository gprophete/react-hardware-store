import React from 'react'
import AdminView from './AdminView.js'
import ShopView from './ShopView.js'

export default class HomePage extends React.Component {

    state = {
        itemCurrentlyOnSale: 'A Hammer',
        editSaleItem: true,
        productList: [
            {
                productName: 'Hammer',
                productName: 'Hammer',
                description: 'Itsa hammer',
                price: 12.3,
            },
            {
                productName: 'Nail',
                description: 'Itsa nail',
                price: 0.12,
            }
        ]

    }

    toggleEditSaleItem = () => {
        const editSaleItem = !this.state.editSaleItem;
        this.setState({ editSaleItem });
        // if (this.state.editSaleItem === true){
        //     this.setState({buttonState: 'hide'})
        // }else{
        //     this.setState({buttonState: 'Edit Sale Item'})
        // }
    }
    onChange = (evt) => {
        console.log(evt.target.value)
        this.setState({ itemCurrentlyOnSale: evt.target.value })
    }

    addNewProductToProductList = (newProduct)  => {
        const productList = [...this.state.productList];
        productList.push(newProduct)
        this.setState({productList})
    };

    handleDelete = (evt) => {
        
    }


    render() {
        return (
            <div>
                <h1>My Hardware Store </h1>
                <span> Currently on Sale: {this.state.itemCurrentlyOnSale} </span>
                <span>
                    <button onClick={this.toggleEditSaleItem}>
                        {this.state.editSaleItem === true ? 'Edit Sale Item' : 'Hide'}
                    </button>
                </span>
                {this.state.editSaleItem ? <div><input type="text" onChange={this.onChange} value={this.state.itemCurrentlyOnSale} /> </div> : null}

                <AdminView
                    productList={this.state.productList}
                    addNewProductToProductList={this.addNewProductToProductList}/>
                
                <ShopView/>

            </div>
        )

    }
}

