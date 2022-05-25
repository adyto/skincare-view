import { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from 'aos'
import Head from 'next/head'
import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer'
import MainBannerHairCare from '../components/organisms/MainBannerHairCare'
import HairCareStep from '../components/organisms/HairCareStep'
import HairCareProblem from '../components/organisms/HairCareProblem'
import HairCareShampoo from '../components/organisms/HairCareShampoo'
import HairCareConditioner from '../components/organisms/HairCareConditioner'

const hairCare: NextPage = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <>
      <Head>
        <title>Hair Care Scarlet</title>
        <meta property="og:title" content="Hair Care Scarlet" key="title" />
      </Head>
      <Navbar activeMenu='haircare' />
      <MainBannerHairCare />
      <HairCareStep />
      <HairCareProblem />
      <HairCareShampoo />
      <HairCareConditioner />
      <Footer />
    </>
  )
}

export default hairCare;
