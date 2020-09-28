import React, { Component } from 'react'
import {Table, Button} from 'semantic-ui-react'
import ValidatedInput from './ValidatedInput'

const requiredValidator = value => !value ? 'Required!' : '';

function validateNumbers(value) {
    if (!value) return 'Required!'
    else {
        let charArray = value.split('');
    
        for (let i = 0; i < charArray.length; i++) {
            if (isNaN(charArray[i] || !charArray[i])) {
                return 'Require Number!'
            }
            else {
                return ''
            }
        }
    }
}

export default class AddProductForm extends Component {

    constructor(props) {
        super(props);
        const{product} = props;
        this.state = {
            title: '',
            price: '',
            quantity: '',
            key: 0,
            ...product
        }
    }

    onChangeInput = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    clearInputs = () => {
        this.setState({
            title: '',
            price: '',
            quantity: ''
        });
    }

    submitForm = () => {
        this.props.onSubmit(this.state);
        this.clearInputs();
        this.setState({key: this.state.key + 1})
    }

    isSubmitDisabled = () => {
        const { title, price, quantity } = this.state; 
        return !!requiredValidator(title)
            || validateNumbers(price)
            || validateNumbers(quantity)
    }

    render() {
        const { title, price, quantity, key } = this.state;
        const disabled = this.isSubmitDisabled();
        return (
            <Table.Row key={key + 1}>
                <Table.Cell>
                    <ValidatedInput type="text" name="title" placeholder="Title" value={title} validate={requiredValidator} onChange={this.onChangeInput} labelContent={{noContent: 'Please enter a value'}}/>
                </Table.Cell>
                <Table.Cell>
                    <ValidatedInput type="text" name="price" placeholder="Price" value={price} validate={validateNumbers} onChange={this.onChangeInput} labelContent={{noContent: 'Please enter a value', noNumber: 'You must enter only numbers'}}/>
                </Table.Cell>
                <Table.Cell>
                    <ValidatedInput type="text" name="quantity" placeholder="Quantity" value={quantity} validate={validateNumbers} onChange={this.onChangeInput} labelContent={{noContent: 'Please enter a value', noNumber: 'You must enter only numbers'}}/>
                </Table.Cell>
                <Table.Cell>
                    <Button disabled={!!disabled} onClick={this.submitForm}>Submit</Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}
