import React, { useState, useEffect } from 'react'
import Announcement from '../../@components/announcement'
import Footer from '../../@components/footer'
import NavBar from '../../@components/navBar'
import NewsLetter from '../../@components/newsLetter'
import { popularProducts } from '../../data'
import { useNavigate } from "react-router-dom";
import ItemCard from '../../@components/itemCard'
const Shop = () => {
  const navigate = useNavigate()
  //   // reload the previous page when backbutton is clicked
  // window.onpopstate = function(event) {
  //   if(event){
  //     console.log('backbutton clicked')
  //     window.history.back()
  //     window.location.reload()
  //   }
  // }
  const [val, setVal] = useState('')
  
  const HandleChange = (e) => {
    // set the default option in the localStorage, so that it can be set again on DOM reload
    localStorage.setItem('value', 'sort by price')
    setVal(e.target.value)
    if ((e.target.value) === 'no filter') {
      window.location.reload()
    }
    else if ((e.target.value) === 'low to high') {
      console.log('clicked low to high')
      navigate('/products/low-to-high-prices')
    }
    else {
      console.log('clicked high to low')
      navigate('/products/high-to-low-prices')
    }
  }
  useEffect(() => {
    // on DOM reload set the default value
    setVal(localStorage.getItem('value'))

  }, [])
  return (
    <>
      <Announcement />
      <NavBar />
      <div style={{ marginLeft: '2vw' }}>Filter : <span>
        <select onChange={HandleChange} value={val}>
          <option disabled selected>sort by price</option>
          <option>no filter</option>
          <option>low to high</option>
          <option>high to low</option>
        </select>
      </span></div>
      <ItemCard />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Shop
