import type { NextPage } from "next"
import { useEffect } from "react"
import AOS from 'aos'
import Head from 'next/head'
import Navbar from "../../components/organisms/Navbar"
import Image from 'next/image'
import Link from 'next/link'

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

      {/* BodyCare-Tips */}
      <section id="solusiStep" className='solusi pt-30 pb-20'>
        <div className='container-fluid' data-aos="fade-up">
          <div className="d-flex justify-content-center">
            <div className="position-relative" data-aos="zoom-in">
              <Image src="/icon/solusi-1.png" className="img-fluid" alt="" width={100} height={100} />
            </div>
          </div>
          <div className='card text-card border-0'>
            <h2 className="text-4xl fw-bold color-palette-1 text-center mb-20">
              Cara Merawat Kulit Sesuai Jenisnya ( Tips dan trik)
            </h2>
          </div>
          <div className='justify-content-center d-flex mb-30'>
            <Image src='/img/body-care-tips.png' className='img-fluid' width={300} height={400} alt='' />
          </div>
          <div className='row gap-lg-0 gap-5'>
            <div className="solusi-card d-sm-flex text-center justify-content-center">
              <div className="column-card mb-1" >
                <Link href='/bodycare/bodycare-tips/#dry-skin'>
                  <a className='btn-md text-white text-md' role="button">
                    Kulit Kering
                  </a>
                </Link>
              </div>
              <div className="column-card mb-1">
                <a className='btn-md text-white text-md' href='/bodycare/bodycare-tips/#' role="button">
                  Kulit Berminyak
                </a>
              </div>
              <div className="column-card mb-1">
                <a className='btn-md text-white text-md' href='/bodycare/bodycare-tips/#'>
                  Kulit Normal
                </a>
              </div>
              <div className="column-card mb-1">
                <a className='btn-md text-white text-md' href='/bodycare/bodycare-tips/#'>
                  Kulit Sensitif
                </a>
              </div>
              <div className="column-card mb-1">
                <a className='btn-md text-white text-md' href='/bodycare/bodycare-tips/#'>
                  Kulit Kombinasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dry Skin */}
      <section id="dry-skin" className='dry-skin pt-3 pb-1'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='d-flex justify-content-center'>
            <div className='position-relative'>
              <Image src='/icon/lamp.png' width={100} height={100} />
            </div>
          </div>
          <h2 className='text-4xl fw-bold color-palette-1 text-center mb-2'>
            KULIT KERING
          </h2>
          <p className="color-palette-1 fw-normal fs-5 mx-2">
            <span className="d-block mb-2">Kulit kering umumnya tidak selentur jenis kulit lainnya. Kulit kering juga biasanya terlihat kusam, berkerut, mudah gatal dan iritasi, serta kasar.</span>
            <span className="d-block mb-2">Ada beberapa faktor yang dapat menyebabkan seseorang lebih rentan memiliki kulit kering, di antaranya faktor genetik, paparan sinar matahari berlebih, perubahan cuaca, terlalu sering mandi air panas, atau penggunaan kosmetik yang tidak cocok.</span ><span className="d-block mb-2">Jika kulit Anda termasuk ke dalam tipe kulit kering, ada beberapa cara merawat kulit kering yang dapat dicoba, antara lain:</span>
          </p>
          <div className='row gap-lg-0 gap-5 mt-4'>
            <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
              <div className='d-flex justify-content-lg-end me-lg-5'>
                <Image src='/img/dry-skin.png' width={400} height={400} />
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-lg-start'>
                <div className='mt-2 fs-5'>
                  <div className="row">
                    <div className="col-1">
                      <div className="position-relative">
                        <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="position-relative">
                        <p className="color-palette-1">Menggunakan sabun dan produk perawatan kulit berbahan kimia ringan atau tidak bersifat iritatif, misalnya yang tidak mengandung pewangi atau antibakteri</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <div className="position-relative">
                        <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="position-relative">
                        <p className="color-palette-1">Membatasi waktu mandi maksimal 15 menit dan sebaiknya gunakan air bersuhu hangat saat mandi</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <div className="position-relative">
                        <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="position-relative">
                        <p className="color-palette-1">Menghindari gerakan menggosok kulit terlalu kencang saat mandi</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <div className="position-relative">
                        <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="position-relative">
                        <p className="color-palette-1">Mengoleskan pelembap setelah mandi dan setiap kali kulit terasa kering</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1">
                      <div className="position-relative">
                        <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="position-relative">
                        <p className="color-palette-1">Menggunakan produk berbahan dasar <span className="fst-italic fw-semibold">petroleum jelly atau minyak</span>, karena dapat memerangkap cairan agar tidak cepat menguap dari kulit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-2'>
            <p className='color-palette-1'>*Rekomendasi perawatan kulit badan dapat menggunakan produk seperti <span className='fw-semibold'>Body Scrub, Body Shower</span> dan <span className="fw-semibold">Body Lotion.</span></p>
          </div>
          <div className='btn-shampoo col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3  mx-auto'>
            <div className="d-sm-flex text-center justify-content-center ">
              <a className='btn-md text-white' role="button" >
                Pesan Sekarang !
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BodyCareTips;
