import React from 'react'
import { popularProducts } from '../../data'
import { useParams } from 'react-router-dom'
const ProductPage = () => {
    const match = useParams()
    console.log(match)
    const matchId = parseInt(match.id)
    console.log(match.id)
    console.log(matchId)
     const matchProduct = popularProducts.filter(item => matchId === item.id)
     console.log(matchProduct)
    return (
        <div>
            {matchProduct[0].id}
            {matchProduct[0].title}
            product page
        </div>
    )
}

export default ProductPage
