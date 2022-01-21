import React from 'react'
import { popularProducts } from '../../data'
import Item from './item'

const ItemCard = () => {
    return (
        <div className = 'row justify-content-left'>
            {popularProducts.map(product => {
                return (
                    <Item product = {product} />
                )
            })}
        </div>
    )
}

export default ItemCard
