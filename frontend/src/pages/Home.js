import React from 'react';
import '../styles/Home.css';
import CarouselContainer from '../components/Carousel'
import Reviews from '../components/Reviews';
import Programs from '../components/Programs';
import Cards from '../components/Cards';
import Herobanner from '../components/Herobanner';


function Home() {
    return (
            <div className='headerContainer'>
            <CarouselContainer/>
            <Programs/>
            <Herobanner/>
             <Cards />
            <Reviews/>
            </div>
    );
}
export default Home;