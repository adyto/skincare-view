import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import SolusiStep from '../components/organisms/SolusiStep'
import FeaturedBody from '../components/organisms/FeaturedBody'
import FeaturedFace from '../components/organisms/FeaturedFace';
import FeaturedHair from '../components/organisms/FeaturedHair';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Footer from '../components/organisms/Footer';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Navbar />
      <MainBanner />
      <SolusiStep />
      <FeaturedBody />
      <FeaturedFace />
      <FeaturedHair />
      {/* <TransactionStep /> */}
      {/* <FeaturedGame /> */}
      <Footer />
    </>
  );
};

export default Home;
