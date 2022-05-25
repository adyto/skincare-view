import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ColumnItem from '../../molecules/ColumnItem'

export default function FeaturedHair() {
  return (
    <section id="featured-hair" className='feature-hair pt-30 pb-20'>
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
                <Image src="/img/hair.png" className="img-fluid" alt="" width={400} height={400} />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-12 d-lg-block'>
            <div className='d-flex justify-content-center me-lg-5'>
              <div className='position-relative'>
                <h1 className='text-4xl text-center'>SCARLET
                  <br className=''></br>
                  HAIR CARE SERIES
                </h1>
              </div>
            </div>
            <div className='d-flex justify-content-lg-start'>
              <div className='mt-10 mb-40 text-lg'>
                <p className='mb-2'>Kalo kamu sedang mengalami masalah seperti rambut lepek/berminyak, ketombean, rambut rontok dan lainnya.</p>
                <p className='text-lg'> Rangkaian <span className='fw-semibold'>Hair Care Scarlett</span> ini bisa jadi <span className='fw-semibold'>SOLUSI</span> buat kamu, karena :</p>
                <ColumnItem icon='logo-ceklis' desc1='Shampo Scarlett' desc2='Mengontrol Minyak Berlebih Pada Kulit Kepala Sehingga Rambut Tidak Lepek' />
                <ColumnItem icon='logo-ceklis' desc1='Conditioner Scarlett' desc2='Membuat Rambut Lebih Bervolume Jadi Tidak Mudah Rontok Dan Gampang Di Atur' />
              </div>
            </div>
          </div>
        </div>
        <div className='btn-hair col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3  mx-auto'>
          <div className="d-sm-flex text-center justify-content-center ">
            <Link href="/haircare">
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
