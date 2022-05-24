import { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from 'aos'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/organisms/Navbar'

const hairCare: NextPage = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <>
      <Head>
        <title>Hair Care Scarlet</title>
        <meta property="og:title" content="Hair Care Scarlet" key="title" />
      </Head>
      <Navbar activeMenu='haircare' />

      {/* Main Banner Hair Care  */}
      <section className='hair-care pt-30 pb-20'>
        <div className='container-fluid container-xxl'>
          <div className='row gap-lg-0 gap-5'>
            <div className='col-lg-6 col-12 my-auto'>
              <div className='d-flex justify-content-center ms-lg-5'>
                <div className='position-relative'>
                  <Image src='/icon/logo-skincare.png' className='img-fluid' width={100} height={100} />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-center me-lg-5 justify-content-lg-start'>
                <div className='position-relative'>
                  <h1 className='text-4xl mt-3 fw-semibold'>INDAHKAN MAHKOTA MU
                    PANCARKAN PESONA MU</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='row gap-lg-0 gap-5'>
            <div className='col-lg-6 col-12 my-auto'>
              <div className='d-flex justify-content-center ms-lg-5'>
                <div className='position-relative'>
                  <Image src='/img/hair-care-1.png' className='img-fluid' width={400} height={500} />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-center me-lg-5 justify-content-lg-start mt-4'>
                <div className='position-relative'>
                  <p className='color-palette-1 text-xl'><span className='fw-normal d-inline-block mb-2'>Rambut merupakan salah satu pesona perempuan yang paling indah, bahkan rambut memiliki sebutan sebagai <span className='fw-semibold'>mahkota perempuan.</span></span><br /><span className='fw-normal d-inline-block mb-2'>Tetapi sayang sekali banyak perempuan yang memperlakukan rambut nya hanya apa ada nya, sehingga <span className='fw-semibold'>mengalami banyak masalah rambut.</span></span><br /><span className='fw-normal d-inline-block mb-2'>Bermula dari keresahan tersebut terciptalah <span className='fw-semibold'>Scarlett Hair Treatment</span> yang sangat sangat efisien untuk perawatan rambut, sehingga kamu bisa mengembalikan keindahan rambut kamu.</span><br /><span className='fw-bold d-inline-block mb-2'>Cerahkan mahkota mu bersama Scarlett Hair Treatment </span>
                  </p>
                  <div className='d-sm-flex text-center justify-content-center'>
                    <a className='btn-banner text-white' role="button">
                      Pesan Sekarang Juga !
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hair Care Solution */}
      <section className='hair-care-solution pt-30 pb-20' >
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='d-flex justify-content-center'>
            <div className='position relative' data-aos="zoom-in">
              <Image src="/icon/solusi-1.png" className='img-fluid' alt='' width={100} height={100} />
            </div>
          </div>
          <div className='card text-card border-0'>
            <h2 className='text-4xl fw-bold color-palette-1 text-center mb-20'>
              MENGALAMI MASALAH INI ?
            </h2>
          </div>
          <div className='row gap-lg-0 gap-5'>
            <div className='col-lg-6 col-12 my-auto d-lg-block'>
              <div className='d-flex justify-content-center justify-content-lg-end me-lg-5'>
                <Image src="/img/hair-care-2.png" width={300} height={400} />
              </div>
            </div>
            <div className='col-lg-6 col-12 my-auto d-lg-block'>
              <div className='d-flex justify-content-center justify-content-lg-start'>
                <div className='mt-10 mb-40 text-lg'>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/ic-sad.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'>Memiliki banyak ketombe walau sudah rutin keramas</p>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/ic-sad.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'>Kesulitan dalam memanjangkan rambut</p>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/ic-sad.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'>Kulit kepala atau rambut mudah berminyak</p>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/ic-sad.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'>Khawatir karena rambut gampang rontok</p>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/ic-sad.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'>Mempunyai rambut yang kurang lebat & tebal</p>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/ic-sad.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'>Sulit merapikan rambut karena kasar</p>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/ic-sad.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'>Menginginkan rambut yang wangi tahan lama</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hair Care Problem Solution */}
      <section className='hair-care-problem-solution pt-5 pb-1'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='d-flex justify-content-center'>
            <div className='position-relative'>
              <Image src="/icon/ic-haircare-1.png" width={100} height={100} />
            </div>
          </div>
          <h2 className='text-4xl fw-bold color-palette-1 text-center mb-10'>
            HADAPI MASALAH TERSEBUT
          </h2>
          <div className='row gap-lg-0 gap-5'>
            <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
              <div className='d-flex justify-content-lg-end justify-content-center me-lg-5 '>
                <Image src="/img/hair-care-3.png" width={400} height={400} />
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-start'>
                <div className='mt-10 mb-30 text-lg'>
                  <div className='row'>
                    <div className='col my-5'>
                      <p className='color-palette-1 fw-normal'>
                        Jika kamu mengalami masalah-masalah tersebut.<br /> <span className='fw-semibold'>Selamat untuk kamu !!</span><br />Kenapa ? Karena bedasarkan keputusan yang akan kamu ambil selanjutnya, kamu akan bisa mengatakan <span className='d-inline-block fw-semibold mb-3'>" bye bye problem ~ "</span> <span className='d-inline-block mb-3'>Dengan solusi <span className='fw-semibold'>Scarlett Hair Treatment</span> yaitu <span className=' fw-semibold'>Yordanian Sea Salt Shampo & Conditioner</span> kamu bisa melawan semua masalah rambut yang kamu alami itu dengan sangat mudah dan relatif cepat.</span><span className='fw-bold'>Rasakan Sensasi Cuci Rambut di Rumah, Kualitas Cuci Rambut di Salon.</span>
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default hairCare;
