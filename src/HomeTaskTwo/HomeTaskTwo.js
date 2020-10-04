import React, { Component } from 'react';
import Splide from "./components/Splide";
import { Container, Form, Checkbox, Message } from "semantic-ui-react";
import ValidatedInput from '../HomeTaskOne/components/ValidatedInput';
import './HomeTaskTwo.css'

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

export default class HomeTaskTwo extends Component {

  state = {
    type: 'loop',
    autoplay: false,
    interval: '2000',
    perPage: 1,
    cover: true,
    height: '600',
    visible: true
  };

  render() {
    const { type, interval, autoplay, perPage, cover, height, visible } = this.state;
    return (
      <Container>
            {
                this.state.visible &&
                <Splide options={{autoplay: autoplay, interval: interval, type, perPage, cover, height: height + 'px'}}>
                    <img src="https://autospecgroup.od.ua/wp-content/uploads/2020/10/0-02-0a-4577637e084ce354289437aa90e27542bbd04890384d0ec5586d97d4fa6a32ec_a3c026f9-768x442.jpg" alt=""/>
                    <img src="https://autospecgroup.od.ua/wp-content/uploads/2020/10/0-02-0a-cf50bad0b7a5561fc0e128841c326c9770a7c07b59a7d99771e89a827068f4b8_baacaffe-768x576.jpg" alt=""/>
                    <img src="https://autospecgroup.od.ua/wp-content/uploads/2020/10/0-02-0a-edf48cafa1ea2979a8777c4ea65596599fc76169e5155b2313eb1c860020968f_a4fe3496-768x576.jpg" alt=""/>
                </Splide>
            }
            <Message>
                <Message.Header>Форма для проверки работоспособности</Message.Header>
                <Form className="splide-options">
                    <Form.Field>
                        <Checkbox label='Autoplay' checked={autoplay} onChange={() => this.setState({ autoplay: !autoplay })}/>
                        <Form.Field>
                            <Checkbox label='Visible' checked={visible} onChange={() => this.setState({ visible: !visible })}/>
                        </Form.Field>
                    </Form.Field>
                    <Form.Field>
                        <ValidatedInput label='Height' type="text" name="height" placeholder="Height" value={height} onChange={(e) => {this.setState({height: e.target.value})}} validate={validateNumbers} labelContent={{noContent: 'Please enter a value', noNumber: 'You must enter only numbers'}} />
                    </Form.Field>
                </Form>
            </Message>
      </Container>
    );
  }
};
