import React from 'react';
import HomeProducts from './HomeProducts/HomeProducts';
import Map from './Map/Map';
import Slider from './Swiper/Slider';

const Home = () => {
    return (
      <>
        <Slider />
        <main className="md:w-4/5 p-4 md:p-0 mx-auto">
          <HomeProducts></HomeProducts>
          <Map></Map>
        </main>
      </>
    );
};

export default Home;