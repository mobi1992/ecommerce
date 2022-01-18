import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom'
import Home from './homePage'
import Shop from './shop'

const MainApp = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path='/products' element = {<Shop />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default MainApp
