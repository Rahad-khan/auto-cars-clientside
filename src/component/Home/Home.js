import React from 'react';
import CarOrder from './CarOrder/CarOrder';
import HomeProducts from './HomeProducts/HomeProducts';
import Map from './Map/Map';
import Slider from './Swiper/Slider';

const Home = () => {
    return (
      <>
        <Slider />
        <main>
          <section className="md:w-4/5 p-4 md:p-0 mx-auto">
            <HomeProducts></HomeProducts>
          </section>
          <section className="p-4 md:p-0 mx-auto">
            <CarOrder></CarOrder>
          </section>
          <section className="md:w-4/5 p-4 md:p-0 mx-auto">
            <Map></Map>
          </section>
        </main>
      </>
    );
};

export default Home;