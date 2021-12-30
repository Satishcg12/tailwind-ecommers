import React from 'react'
import TopCatagories from '../components/TopCatagories'
import TopDealsSlider from '../components/TopDealsSlider'
import ProductSection from '../components/ProductSection'
const HomePage = () => {
    return (
        <>

            <TopCatagories/>
            <div className="flex justify-center mb-5">
            <TopDealsSlider/>
            </div>
            
            <div className="">
                <ProductSection/>
            </div>
        </>
    )
}

export default HomePage
