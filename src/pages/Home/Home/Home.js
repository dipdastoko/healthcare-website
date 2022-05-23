import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Services from '../Services/Services/Services';
import Doctors from '../Doctors/Doctors';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Header></Header>
            <Services></Services>
            <Doctors></Doctors>
            <Footer></Footer>

        </div>
    );
};

export default Home;