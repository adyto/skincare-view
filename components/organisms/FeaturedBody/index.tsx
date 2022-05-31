import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ColumnItemFeature from '../../molecules/ColumnItemFeature'

export default function FeaturedBody() {
  return (
    <section id="featured-body" className='feature-body pt-30 pb-20'>
      <div className='container-fluid container-xxl' data-aos="fade-up">
        <div className='d-flex justify-content-center'>
          <div className='position-relative'></div>
          <img src='/icon/lamp.png' width="100px" height="100px"></img>
        </div>
        <h2 className='text-4xl fw-bold color-palette-1 text-center mb-10'>INI SOLUSI NYA</h2>
        <div className='row gap-lg-0 gap-5'>
          <div className='col-lg-6 col-12 my-auto'>
            <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
              <div className="position-relative" data-aos="zoom-in">
                <Image src="/img/body.png" className="img-fluid" alt="" width={400} height={400} />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-12 d-lg-block'>
            <div className='d-flex justify-content-center me-lg-5'>
              <div className='position-relative'>
                <h1 className='text-4xl text-center'>SCARLET
                  <br />
                  BODY CARE SERIES
                </h1>
              </div>
            </div>
            <div className='d-flex justify-content-lg-start'>
              <div className='mt-10 mb-40 text-lg'>
                <p className='mb-2'>Kalo kamu sedang mengalami masalah seperti kulit kusam, <br /> kulit kering, kulit sensitif dan lainnya. <br /></p>
                <p className='text-lg'> Rangkaian <span className='fw-semibold'>Body Care Scarlett</span> ini bisa jadi <span className='fw-semibold'>SOLUSI</span> buat kamu, karena :</p>
                <ColumnItemFeature desc1='Body Scrub' desc2='Nya Mampu mengangkat Sel-Sel Kulit Mati Sehingga Tubuh Menjadi Lebih Cerah.' />
                <ColumnItemFeature desc1='Shower Scrub' desc2='Yang Membersihkan Tubuh Lebih Maksimal Dan Memberi Kesegaran Yang Naikin Mood Kamu.' />
                <ColumnItemFeature desc1='Body Lotion' desc2='Nya Bisa Mengembalikan Kelembaban Kulit Dan Bikin Kamu Wangi Sepanjang Hari' />
              </div>
            </div>
          </div>
        </div>
        <div className='btn-body col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3  mx-auto'>
          <div className="d-sm-flex text-center justify-content-center ">
            <Link href="/bodycare">
              <a className='btn-md text-white' role="button" >
                Informasi Lengkap
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section >
  )
}
