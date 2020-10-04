import React, { Component } from 'react'
import SplideLib from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default class Splide extends Component {

    constructor(props) {
        super(props);
        this.slider = React.createRef();
        this.splide = null;
    }

    componentDidMount() {
        this.splide = new SplideLib(this.slider.current, this.props.options).mount();
    }

    componentDidUpdate(prevProps) {
        if(this.props.options !== prevProps.options) {
            this.splide.options = this.props.options;
            this.updateSplide();
        }
    }

    componentWillUnmount() {
        this.splide.destroy();
    }

    updateSplide = () => {
        this.splide.destroy();
        this.splide = new SplideLib(this.slider.current, this.props.options).mount();
    }

    render() {
        const { children } = this.props;
        let liKey = 0;
        return (
            <div ref={this.slider} className="splide">
                <div className="splide__track">
                    <ul className="splide__list">
                        {children.map(img =>  <li key={liKey++} className="splide__slide">{img}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
};
