import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
                  <br className=''></br>
                  FACE CARE SERIES
                </h1>
              </div>
            </div>
            <div className='d-flex justify-content-lg-start'>
              <div className='mt-10 mb-40 text-lg'>
                <p className='mb-2'>Kalo kamu sedang mengalami masalah seperti wajah berjerawat, kulit wajah kusam, noda/flek hitam yang susah hilang, dan lainnya.</p>
                <p className='text-lg'> Rangkaian <span className='fw-semibold'>Face Care Scarlett</span> ini bisa jadi <span className='fw-semibold'>SOLUSI</span> buat kamu, karena :</p>
                <div className='row'>
                  <div className='col-1'>
                    <div className='position-relative'>
                      <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                      <img />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='position-relative'>
                      <p className='color-palette-1'><span className='fw-semibold'>Face Wash</span>  Nya Mampu Membersihkan Wajah Kamu Dari Debu & Polusi Setelah Beraktifitas
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-1'>
                    <div className='position-relative'>
                      <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='position-relative'>
                      <p className='color-palette-1'><span className='fw-semibold'>Toner Scarlett</span> Mampu Membersihkan Kulit Wajah Mu Hingga Bagian Terdalam Nya
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-1'>
                    <div className='position-relative'>
                      <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='position-relative'>
                      <p className='color-palette-1'><span className='fw-semibold'>Serum Scarlett</span>  Menutrisi Kulit Wajah Sehingga Tidak Mudah Bejerawat & Kulit Wajah Bisa Lebih Glowing
                      </p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-1'>
                    <div className='position-relative'>
                      <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                    </div>
                  </div>
                  <div className='col'>
                    <div className='position-relative'>
                      <p className='color-palette-1'><span className='fw-semibold'>Cream Scarlettt</span> Membantu Kamu Mengatasi Masalah Kulit Berjerawat & Kusam Dengan Maksimal
                      </p>
                    </div>
                  </div>
                </div>
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
