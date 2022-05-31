import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ColumnItemFeature from '../../molecules/ColumnItemFeature'

export default function FeaturedFace() {
  return (
    <section id="featured-face" className='feature-face pt-30 pb-20'>
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
                <Image src="/img/face.png" className="img-fluid" alt="" width={400} height={400} />
                <img />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-12 d-lg-block'>
            <div className='d-flex justify-content-center me-lg-5'>
              <div className='position-relative'>
                <h1 className='text-4xl text-center'>SCARLET
                  <br />
                  FACE CARE SERIES
                </h1>
              </div>
            </div>
            <div className='d-flex justify-content-lg-start'>
              <div className='mt-10 mb-40 text-lg'>
                <p className='mb-2'>Kalo kamu sedang mengalami masalah seperti wajah berjerawat, kulit wajah kusam, noda/flek hitam yang susah hilang, dan lainnya.
                </p>
                <p className='text-lg'> Rangkaian <span className='fw-semibold'>Face Care Scarlett</span> ini bisa jadi <span className='fw-semibold'>SOLUSI</span> buat kamu, karena :</p>
                <ColumnItemFeature desc1='Face Wash' desc2='Nya Mampu Membersihkan Wajah Kamu Dari Debu & Polusi Setelah Beraktifitas' />
                <ColumnItemFeature desc1="Toner Scarlett" desc2='Mampu Membersihkan Kulit Wajah Mu Hingga Bagian Terdalam Nya' />
                <ColumnItemFeature desc1='Serum Scarlett' desc2='Menutrisi Kulit Wajah Sehingga Tidak Mudah Bejerawat & Kulit Wajah Bisa Lebih Glowing' />
                <ColumnItemFeature desc1='Cream Scarlettt' desc2='Membantu Kamu Mengatasi Masalah Kulit Berjerawat & Kusam Dengan Maksimal' />
              </div>
            </div>
          </div>
        </div>
        <div className='btn-face col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3  mx-auto'>
          <div className="d-sm-flex text-center justify-content-center ">
            <Link href="/facecare">
              <a className='btn-md text-white' role="button" >
                Informasi Lengkap
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
