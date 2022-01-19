import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom'
import HighToLowSortedProducts from './highToLowSortedProducts'
import Home from './homePage'
import LowToHighSortedProducts from './lowToHighSortedProducts.js'
import Shop from './shop'

const MainApp = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path='/products' element = {<Shop />}/>
                    <Route exact path='/products/low-to-high-prices' element = {<LowToHighSortedProducts />}/>
                    <Route exact path='/products/high-to-low-prices' element = {<HighToLowSortedProducts />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default MainApp
