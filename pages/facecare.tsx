import { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from 'aos'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer'
import MainBannerFaceCare from '../components/organisms/MainBannerFaceCare'
import FaceCareStep from '../components/organisms/FaceCareStep'
import FaceWash from '../components/organisms/FaceWash'
import FaceToner from '../components/organisms/FaceToner'
import FaceSerum from '../components/organisms/FaceSerum'
import FaceCream from '../components/organisms/FaceCream'
import FaceMask from '../components/organisms/FaceMask'

const faceCare: NextPage = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Head>
        <title>Face Care Scarlet</title>
        <meta property="og:title" content="Face Care Scarlet" key="title" />
      </Head>
      <Navbar activeMenu='facecare' />
      <MainBannerFaceCare />
      <FaceCareStep />
      <FaceWash />
      <FaceToner />
      <FaceSerum />
      <FaceCream />
      <FaceMask />
      <Footer />
    </>
  )
}
export default faceCare;

