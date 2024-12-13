import React from 'react'
import DrinkHero from './DrinkHero'
import FindPlace from './FindPlace'
import DrinkCarousel from './DrinkCarousel'
import RestaurantsCard from '../Common/RestaurantsCard'
import Map from './Map'

function DrinkPage() {
    return (
        <>
            <DrinkHero />
            <FindPlace/>
            <RestaurantsCard title="Popular restuarants in Lagos" />
            <DrinkCarousel/>
            <RestaurantsCard title="Resturants nearby" />
            <Map/>
        </>
    )
}

export default DrinkPage
