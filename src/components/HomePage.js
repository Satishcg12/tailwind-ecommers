import React from 'react'
import TopCatagories from './SubComponents/TopCatagories'
import TopDealsSlider from './SubComponents/TopDealsSlider'

const HomePage = () => {
    return (
        <>
            <TopCatagories/>
            <div className="flex justify-center">
            <TopDealsSlider/>
            </div>
        </>
    )
}

export default HomePage
