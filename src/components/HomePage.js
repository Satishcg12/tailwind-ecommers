import React from 'react'
import TopCatagories from './SubComponents/TopCatagories'
import TopDealsSlider from './SubComponents/TopDealsSlider'
import TopOffer from './SubComponents/TopOffer'

const HomePage = () => {
    return (
        <>
            <TopCatagories/>
            <div className="flex justify-center mb-5">
            <TopDealsSlider/>
            </div>
            <div className="">
                <TopOffer title="top product"/>
                <TopOffer title="todays deal"/>
                <TopOffer title="yesterday special"/>
                <TopOffer title="on sales"/>
            </div>
        </>
    )
}

export default HomePage
