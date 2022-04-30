import React from 'react';
import Header from '../Header/Header';
import HomeProducts from './HomeProducts/HomeProducts';
import Slider from './Swiper/Slider';

const Home = () => {
    return (
      <>
        <Header />
        <Slider />
        <main className="md:w-11/12 p-4 md:p-0 mx-auto">
          <HomeProducts></HomeProducts>
        </main>
      </>
    );
};

export default Home;