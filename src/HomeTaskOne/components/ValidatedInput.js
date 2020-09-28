import React, { Component, Fragment } from 'react'
import {Input, Label} from 'semantic-ui-react'

export default class ValidatedInput extends Component {

    state = {
        'error': '',
        touched: false
    };

    validate = () => {
        const error = this.props.validate(this.props.value);
        this.setState({error});
    };

    componentDidMount() {
        this.validate();
    };

    componentDidUpdate(oldProps) {
        if (oldProps.value !== this.props.value) {
            this.validate();
        };
    };

    touchInput = () => {
        this.setState({touched: true});
    };

    checkContent = () => {
        const { error } = this.state; 
        const { labelContent } = this.props;
        if (error === 'Require Number!') {
            return labelContent.noNumber
        }
        else {
            return labelContent.noContent
        }
    }

    render() {
        const {validate, labelContent, ...otherProps} = this.props;
        const {error, touched} = this.state;
        const content = this.checkContent();
        if (!!error && !!touched) return (
            <Fragment>
                <Input
                    {...otherProps}
                    onBlur = {this.touchInput}
                    error = {!!error && !!touched}
                />
                <Label className="input-error-label" content={content} basic color='red' pointing/>
            </Fragment>
        )
        return (
            <Input
                {...otherProps}
                onFocus={this.detouchInput} 
                onBlur = {this.touchInput}
                error = {!!error && !!touched}
            />
        )
    }
}
