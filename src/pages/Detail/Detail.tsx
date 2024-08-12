import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import DetailProduct from '../../components/Details/DetailProduct'

const Detail:React.FC= () => {
  return (
    <>
        <Navbar/>
        <DetailProduct/>
        <Footer/>
    </>
  )
}

export default Detail