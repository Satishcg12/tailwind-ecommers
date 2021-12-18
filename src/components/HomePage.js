import React from 'react'
import TopCatagories from './SubComponents/TopCatagories'
import TopDealsSlider from './SubComponents/TopDealsSlider'
import TopOffer from './SubComponents/TopOffer'

const HomePage = () => {
    return (
        <>
            <TopCatagories/>
            <div className="flex justify-center my-5">
            <TopDealsSlider/>
            </div>
            <div className="">
                <TopOffer/>
            </div>
        </>
    )
}

export default HomePage
