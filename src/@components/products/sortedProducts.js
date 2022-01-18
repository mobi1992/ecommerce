import React from 'react'
import Product from './product'

const SortedProducts = (sortedProducts) => {
    return (
        <div className = 'row justify-content-left'>
            {sortedProducts.map(product => {
                return (
                    <Product product = {product} />
                )
            })}
        </div>
    )
}

export default SortedProducts
