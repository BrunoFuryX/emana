import React, { Component } from 'react';
import Carousel from 'react-slick'
import { settings }  from "../carousel/index";

export default class Name extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: 0
        };
    }
    componentWillReceiveProps() {
        this.setState({key: 0});
    }
    render() {

        if( !this.props.images.length )
            return <div className="quickview__images">
                <span className="quickview__images--no">Sem Imagem</span>
            </div>;

        if(this.props.images.length < 2 )
            return <div className="quickview__images">
            <figure className="quickview__image">
                <img src={this.props.images[this.state.key]} />
            </figure>

            <div className="quickview__images--more">
                
                <ul className="quickview__images--list">{this.props.images.map((image, key) => <li className="quickview__images--item" key={key} onClick={(e) => { this.setState({key}) }} ><img src={image} /></li>)}</ul>
            </div>

        </div>;

    return <div className="quickview__images">
            <figure className="quickview__image">
                <img src={this.props.images[this.state.key]} />
            {this.props.children}
            </figure>

            <div className="quickview__images--more">
                
                <Carousel {...settings} className="quickview__images--list">{this.props.images.map((image, key) => <div className="quickview__images--item" key={key} onClick={(e) => { this.setState({key}) }} ><img src={image} /></div>)}</Carousel>
            </div>

        </div>;
    }
}
