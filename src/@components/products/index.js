import React from 'react'
import { popularProducts } from '../../data'
import Product from './product'

const Products = () => {
    return (
        <div className = 'row justify-content-left'>
            {popularProducts.map(product => {
                return (
                    <Product product = {product} />
                )
            })}
        </div>
    )
}

export default Products
