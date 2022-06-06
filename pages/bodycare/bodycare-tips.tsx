import type { NextPage } from "next"
import { useEffect } from "react"
import AOS from 'aos'
import Head from 'next/head'
import Navbar from "../../components/organisms/Navbar"
import Image from 'next/image'
import Link from 'next/link'
import BodyCareTipsStep from "../../components/organisms/BodyCareTipsStep"
import DrySkin from "../../components/organisms/BodyCareTipsStep/dry-skin"
import OilySkin from "../../components/organisms/BodyCareTipsStep/oily-skin"
import NormalSkin from "../../components/organisms/BodyCareTipsStep/normal-skin"
import SensitiveSkin from "../../components/organisms/BodyCareTipsStep/sensitive-skin"
import CombinationSkin from "../../components/organisms/BodyCareTipsStep/combination-skin"

const BodyCareTips: NextPage = () => {
  useEffect(() => {
    AOS.init()
  });
  return (
    <>
      <Head>
        <title>Body Care Tips & Trick</title>
        <meta property="og:title" content="Body Care Tips & Trick" key='title' />
      </Head>
      <Navbar activeMenu="bodycare" />
      <BodyCareTipsStep />
      <DrySkin />
      <OilySkin />
      <NormalSkin />
      <SensitiveSkin />
      <CombinationSkin />
    </>
  )
}

export default BodyCareTips;
