import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Services from '../Services/Services/Services';
import Doctors from '../Doctors/Doctors';
import Comment from '../Comment/Comment';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Header></Header>
            <Services></Services>
            <Doctors></Doctors>
            <Comment></Comment>
            <Footer></Footer>

        </div>
    );
};

export default Home;