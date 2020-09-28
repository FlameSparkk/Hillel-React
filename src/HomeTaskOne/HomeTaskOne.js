import React, { Component } from 'react'
import ProductTable from './components/ProductTable'
import {Loader, Table} from 'semantic-ui-react'
import productsApi from './products-api'
import './HomeTaskOne.css'

export default class HomeTaskOne extends Component {
    state = {
        products: [],
        isFetching: false,
        newProductId: 3,
    };

    componentDidMount() {
        this.setState({isFetching: true})
        productsApi
            .fetchProducts()
            .then(products => {
                this.setState({products, isFetching: false})
            })
    };

    removeProduct = id => {
        const { products } = this.state;
        this.setState({
            products: products.filter(product => product.id !== id)
        });
    };

    addProduct = newProduct => {
        const {products} = this.state;
        this.setState({
            products: [
                ...products,
                {
                    id: this.state.newProductId + 1,
                    ...newProduct
                }
            ],
            newProductId: this.state.newProductId + 1
        });
    };

    editProduct = updatedProduct => {
        const { products } = this.state;
        this.setState({
            products: products.map(product => product.id === updatedProduct.id ? updatedProduct: product)
        });
    };
    
    render() {
        const { isFetching } = this.state;
        return (
            <div className="table-container">
                <Loader size="small" active={isFetching}/>
                <Table celled className="products-table">
                    <ProductTable 
                        onRemoveProduct={this.removeProduct}
                        onEditProduct={this.editProduct}
                        onAddProduct={this.addProduct}
                        products={this.state.products}
                    />
                </Table>
            </div>
        )
    }
}
