import { NextPage } from "next";
import { useEffect } from "react";
import AOS from 'aos'
import Head from 'next/head'
import Navbar from "../../components/organisms/Navbar";
import HairCareTipsStep from "../../components/organisms/HairCareTipsStep";
import Link from 'next/link'
import Image from 'next/image'
const HairCareTips: NextPage = () => {
  useEffect(() => {
    AOS.init()
  });
  return (
    <>
      <Head>
        <title>Hair Care Tips & Trick</title>
        <meta property="0g:title" content="Face Care Tips & Trick" key="title" />
      </Head>
      <Navbar activeMenu="haircare" />
      {/* <HairCareTipsStep /> */}
      <section className="shampoo-tips pt-3 pb-2 ">
        <div className="container-fluid container-xxl">
          <div className="card text-card border-0">
            <h2 className="text-4xl fw-bold color-palette-1 text-center mb-2">
              Cara Merawat Rambut (Tips dan Trik)
            </h2>
          </div>
          <div className="row gap-lg-0 gap-5 pt-3">
            <div className="col-lg-6 col-12 my-auto">
              <div className="d-flex justify-content-center ms-lg-5">
                <Image src='/img/shampoo-tips.png' className='img-fluid' width={400} height={500} />
              </div>
            </div>
            <div className="col-lg-6 col-12 d-lg-block">
              <div className='d-flex justify-content-center me-lg-5 mt-4 ms-sm-5 mb-4'>
                <div className="position-relative">
                  <h2 className="text-4xl text-center fw-semibold color-palette-1">
                    Pilih Shamppo yang tepat
                  </h2>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-lg-start px-lg-5">
                <div className="column-card  text-center mt-2 mb-1 mx-5 ">
                  <a className='btn-md text-white text-md ' role="button">
                    Rambut Berminyak
                  </a>
                </div>
                <div className="column-card text-center mt-2 mb-1 mx-5">
                  <a className='btn-md text-white text-md ' role="button">
                    Rambut Kering
                  </a>
                </div>
                <div className="column-card  text-center mt-2 mb-1 mx-5">
                  <a className='btn-md text-white text-md' role="button">
                    Rambut Kombinasi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HairCareTips;
