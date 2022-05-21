import React from 'react'
import Image from 'next/image'

export default function solusiStep() {
  return (
    <section id="solusiStep" className='solusi pt-30 pb-20'>
      <div className='container-fluid' data-aos="fade-up">
        <div className="d-flex justify-content-center">
          <div className="position-relative" data-aos="zoom-in">
            <Image src="/icon/solusi-1.png" className="img-fluid" alt="" width={100} height={100} />
          </div>
        </div>
        <div className='card text-card border-0'>
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-20">
            Kamu lagi cari masalah solusi buat apa ni?
          </h2>
        </div>
        <div className='justify-content-center d-flex mb-30'>
          <Image src='/icon/solusi-2.png' className='img-fluid' width={240} height={280} alt='' />
        </div>
        <div className='row gap-lg-0 gap-5'>
          <div className="solusi-card d-sm-flex text-center justify-content-center">
            <div className="column-card mb-1" >
              <a className='btn-md text-white text-md' href='/#featured-body' role="button">
                Masalah Kulit Badan
              </a>
            </div>
            <div className="column-card mb-1">
              <a className='btn-md text-white text-md' href='/#featured-face' role="button">
                Masalah Kulit Wajah
              </a>
            </div>
            <div className="column-card mb-1">
              <a className='btn-md text-white text-md' href='/#featured-hair'>
                Masalah Rambut
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
