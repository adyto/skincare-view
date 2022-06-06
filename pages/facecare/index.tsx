import type { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from 'aos'
import Head from 'next/head'
import NavBar from '../../components/organisms/Navbar'
import MainBannerFaceCare from '../../components/organisms/MainBannerFaceCare'
import FaceCareStep from '../../components/organisms/FaceCareStep'
import FaceWash from '../../components/organisms/FaceWash'
import FaceToner from '../../components/organisms/FaceToner'
import FaceSerum from '../../components/organisms/FaceSerum'
import FaceCream from '../../components/organisms/FaceCream'
import FaceMask from '../../components/organisms/FaceMask'
import SafetyInformationContent from '../../components/organisms/SafetyInformationContent'
import Footer from '../../components/organisms/Footer'

const faceCare: NextPage = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <>
      <Head>
        <title>Face Care Scarlet</title>
        <meta property="og:title" content="Face Care Scarlet" key="title" />
      </Head>
      <NavBar activeMenu='facecare' />
      <MainBannerFaceCare />
      <FaceCareStep />
      <FaceWash />
      <FaceToner />
      <FaceSerum />
      <FaceCream />
      <FaceMask />
      <SafetyInformationContent />
      <Footer />
    </>
  )
}

export default faceCare;
