import React, { Component } from 'react';

import { Container,Row,Col,Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import axios from 'axios';

import CartContext from '../contexts/CartContext';
export default class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get('https://tr9hv.sse.codesandbox.io/products')
        .then(res => this.setState({products: res.data}));
    }
    render(){
        return(
            <Container>
                <div className = "Product">
                    <Row>
                    {this.state.products.map(product => 
                    <Col sm="4" md="3" className="mt-5">
                        <Card>
                            <CardImg src={product.imgUrl} alt="Card image cap" />
                            <CardBody>
                            <CardTitle>{product.name}</CardTitle>
                            <CardText>{product.des}</CardText>
                            <CartContext.Consumer>
                                {({addToCart}) =><Button onClick={() => addToCart(product)}>Button</Button> }  
                            </CartContext.Consumer>
                            </CardBody>
                        </Card>
                    </Col>
                    )}
                    </Row>
                </div>
            </Container>
        )
    }
}