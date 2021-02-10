// rcc tạo component dưới dạng class
// cfc tạo component dưới dạng function
/**
 * Cách chia component
 * - Component phải tái sử dụng được
 * - Dễ quản lý source code nhất
 */

import React, { Component } from 'react'
import Carousel from './Carousel';
import Footer from './Footer';
import Header from "./Header";
import ProductList from './ProductList';



export default class ExampleLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel/>
                <ProductList/>
                <Footer/>
            </div>
        )
    }
}
