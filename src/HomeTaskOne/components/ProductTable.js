import React, { Fragment } from 'react'
import {Table} from 'semantic-ui-react'
import ProductRow from './ProductRow'
import AddProductForm from './AddProductForm'

export default function ProductTable({
    products,
    onRemoveProduct,
    onEditProduct,
    onAddProduct
}) {    
    return (
        <Fragment>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    products.map(product => (
                        <ProductRow 
                            onRemoveProduct={onRemoveProduct}
                            onEditProduct={onEditProduct}
                            key={product.id}
                            product={product}
                        />
                    ))
                }
                <AddProductForm onSubmit={onAddProduct}/>
            </Table.Body>
        </Fragment>
    )
}
