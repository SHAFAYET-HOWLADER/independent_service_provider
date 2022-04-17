import React from 'react';
import Banner from '../Pages/Banner/Banner';
import ExplorePage from '../Pages/ExplorePage/ExplorePage';
import Services from '../Pages/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExplorePage></ExplorePage>
            <Services></Services>
        </div>
    );
};

export default Home;