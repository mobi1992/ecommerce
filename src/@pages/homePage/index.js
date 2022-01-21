import React from 'react'
import Announcement from '../../@components/announcement'
import CarouselSlider from '../../@components/carousel'
import Categories from '../../@components/categories'
import Footer from '../../@components/footer'
import ItemCard from '../../@components/itemCard'
import NavBar from '../../@components/navBar'
import NewsLetter from '../../@components/newsLetter'

const Home = () => {
    return (
        <>
        <Announcement />
        <NavBar />
        <CarouselSlider />
        <Categories />
        <ItemCard />
        <NewsLetter />
        <Footer />
        </>
    )
}

export default Home
