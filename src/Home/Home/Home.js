import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Story from '../Story/Story';
import Care from '../Care/Care';
import Services from '../Servics/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Story></Story>
            <Services></Services>
            <Care></Care>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;