import React from 'react';
import '../../App.css';
import HeroSection from '../../components/HeroSection';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Card />
            <Footer />
        </>
    )
}

export default Home;