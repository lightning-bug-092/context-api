import React, { Component } from 'react';

import CartContext from '../contexts/CartContext';

export default class CartProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:[]
        }
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(product){
        this.setState({
            item:this.state.item.concat(product)
        })
        console.log(this.state.item)
    }
    render(){
        return(
            <CartContext.Provider value = {{item:this.state.item,addToCart:this.addToCart}}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}