import type { NextPage } from "next"
import { useEffect } from 'react'
import AOS from 'aos'
import Image from 'next/image'
import Link from 'next/link'

const SafetyInformationContent: NextPage = () => {
  useEffect(() => {
    AOS.init()
  })
  return (
    <>
      <section className='safety-information pt-30 pb-20'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='d-flex justify-content-center'>
            <div className='position-relative'></div>
            <img src='/icon/ic-safety.png' width="100px" height="100px"></img>
          </div>
          <h2 className='text-4xl fw-bold color-palette-1 text-center mb-10'>GIMANA KEAMANANNYA ?</h2>
          <p className='text-xl color-palette-1'>
            <span className='d-inline-block mb-3'>Sebelum memilih perawatan wajib banget mastiin keamanan nya, ingat diri kamu berharga, jangan asal pilih ! </span><br />
            Dan pasti nya semua Rangkaian Scarlett di jamin AMAN !<br />
            Kenapa ? Karena Ini :
          </p>
          <div className='row gap-lg-0 gap-5'>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className="d-flex justify-content-center">
                <div className="position-relative" data-aos="zoom-in">
                  <Image src="/icon/ic-bpom.png" className="img-fluid" alt="" width={200} height={200} />
                </div>
              </div>
              <div className='d-flex justify-content-center mt-1'>
                <h2 className='fw-semibold'>Terdaftar di BPOM</h2>
              </div>
              <div className='d-flex justify-content-start mt-2'>
                <p className='color-palette-1'>
                  BPOM adalah lembaga  yang bertugas di bidang pengawasan obat dan makanan. Bisa di pastikan semua produk Scarlett terdaftar di BPOM
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-center'>
                <div className='position-relative' data-aos="zoom-in">
                  <Image src="/icon/ic-hamil.png" className='img-fluid' alt='' width={200} height={200} />
                </div>
              </div>
              <div className='d-flex justify-content-center mt-1'>
                <h2 className='fw-semibold'>Aman untuk Bumil & Busui</h2>
              </div>
              <div className='d-flex justify-content-start mt-2'>
                <p className='color-palette-1'>
                  Kalo lagi hamil emang harus ekstra hati hati, tapi tenang <span className='fw-bold'>Scarlett</span> Aman digunakan walau begitu tetap di anjurkan untuk konsultasi dengan dokter yaa
                </p>
              </div>
            </div>
          </div>
          <div className='row gap-lg-0 gap-5 mt-4'>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className="d-flex justify-content-center">
                <div className="position-relative" data-aos="zoom-in">
                  <Image src="/icon/ic-mercury.png" className="img-fluid" alt="" width={200} height={200} />
                </div>
              </div>
              <div className='d-flex justify-content-center mt-1'>
                <h2 className='fw-semibold'>TANPA MERCURY</h2>
              </div>
              <div className='d-flex justify-content-start mt-2'>
                <p className='color-palette-1'>
                  Untuk kamu yang belum tau, merkuri adalah salah satu zat yang berbahaya untuk kulit kita, jadi tentu <span className='fw-semibold'>SCARLETT TIDAK MENGGUNAKAN MERKURI !!</span>
                </p>
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-center'>
                <div className='position-relative' data-aos="zoom-in">
                  <Image src="/icon/ic-hydroquinone.png" className='img-fluid' alt='' width={200} height={200} />
                </div>
              </div>
              <div className='d-flex justify-content-center mt-1'>
                <h2 className='fw-semibold'>Aman untuk Bumil & Busui</h2>
              </div>
              <div className='d-flex justify-content-start mt-2'>
                <p className='color-palette-1'>
                  Hydroquinone juga merupakan zat yang berbahaya untuk kulit, jadi tentu <span className='fw-semibold'>SCARLETT JUGA TIDAK MENGGUNAKAN HYDROQUINONE !!</span>
                </p>
              </div>
            </div>
          </div>
          <div className='btn-safety col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3  mx-auto'>
            <div className="d-sm-flex text-center justify-content-center ">
              <Link href="/#">
                <a className='btn-md text-white' role="button" >
                  Informasi Lengkap
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export default SafetyInformationContent;
