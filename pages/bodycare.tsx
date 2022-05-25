import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head'
import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer'
import MainBannerBodyCare from '../components/organisms/MainBannerBodyCare';
import BodyCareStep from '../components/organisms/BodyCareStep';
import BodyScrub from '../components/organisms/BodyScrub';
import BodyShowerScrub from '../components/organisms/BodyShowerScrub';
import BodyLotion from '../components/organisms/BodyLotion';

const bodyCare: NextPage = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Head>
        <title>Body Care Scarlet</title>
        <meta property="og:title" content="Body Care Scarlet" key="title" />
      </Head>
      <Navbar activeMenu='bodycare' />
      <MainBannerBodyCare />
      <BodyCareStep />
      <BodyScrub />
      <BodyShowerScrub />
      <BodyLotion />
      <Footer />
    </>
  )
}

export default bodyCare;