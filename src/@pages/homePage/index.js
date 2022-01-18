import React from 'react'
import Announcement from '../../@components/announcement'
import CarouselSlider from '../../@components/carousel'
import Categories from '../../@components/categories'
import Footer from '../../@components/footer'
import NavBar from '../../@components/navBar'
import NewsLetter from '../../@components/newsLetter'
import Products from '../../@components/products'

const Home = () => {
    return (
        <>
        <Announcement />
        <NavBar />
        <CarouselSlider />
        <Categories />
        <Products />
        <NewsLetter />
        <Footer />
        </>
    )
}

export default Home
