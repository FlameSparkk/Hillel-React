import React, { Component, Fragment } from 'react'
import {Table, Icon} from 'semantic-ui-react'
import AddProductForm from './AddProductForm'


export default class ProductRow extends Component {
    state = {
        isEdit: false,
    }

    onEdit = updatedProduct => {
        this.props.onEditProduct(updatedProduct)
        this.setState({ isEdit: false });
    }

    render() {
        const {product, onRemoveProduct} = this.props;
        const {isEdit} = this.state;
        if (isEdit) return <AddProductForm onSubmit={this.onEdit} product={product}/>
        return (
            <Fragment>
                <Table.Row>
                    <Table.Cell>{product.title}</Table.Cell>
                    <Table.Cell>{product.price}</Table.Cell>
                    <Table.Cell>{product.quantity}</Table.Cell>
                    <Table.Cell>
                        <Icon className="edit-ico" name='edit' onClick={() => this.setState({isEdit: true})} />
                        <Icon className="delete-ico" name='delete' onClick={() => onRemoveProduct(product.id)} />
                    </Table.Cell>
                </Table.Row>
            </Fragment>
        )
    }
}
