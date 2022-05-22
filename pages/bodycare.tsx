import type { NextPage } from 'next';
import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer'

const bodyCare: NextPage = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Navbar />
      {/* Main Banner Body Care */}
      <section className='body-care pt-30 pb-20'>
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
                  <h1 className='text-4xl'>Makin Percaya Diri Dengan <br />Kulit Cerah dan Wangi <br /> Sepanjang Hari !</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='row gap-lg-0 gap-5'>
            <div className='col-lg-6 col-12 my-auto'>
              <div className='d-flex justify-content-center ms-lg-5'>
                <div className='position-relative'>
                  <Image src='/img/body-care-1.png' className='img-fluid' width={350} height={500} />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-center me-lg-5 justify-content-lg-start mt-4'>
                <div className='position-relative'>
                  <p className='color-palette-1 text-xl'><span className='fw-normal d-inline-block mb-2'>Banyak orang terlalu fokus merawat kulit wajah sehingga lupa untuk merawat kulit tubuh nya..</span><br /><span className='fw-normal d-inline-block mb-2'>Mungkin juga karena bingung kali ya soal nya emang jarang ada produk body care, padahal merawat kulit tubuh sama penting nya !</span><br /><span className='fw-normal d-inline-block mb-2'>Sayang banget kan kalo wajah udah glowing tapi kulit tubuh nya masih kusam :(</span><br /><span className='fw-normal d-inline-block mb-3'>Untung nya di Scarlett lengkap banget, ada Body Care nya juga !</span><br /><span className='fw-bold d-inline-block mb-2'>Glowing Jangan Setengah - Setengah, Pancarkan Pesona Mu Secara Utuh Dengan Body Care Scalett</span></p>
                  <div className="d-sm-flex text-center justify-content-center ">
                    <a className='btn-banner text-white' role="button" >
                      Pesan Sekarang !
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Solution  */}
      <section className='body-solution pt-30 pb-20'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className="d-flex justify-content-center">
            <div className="position-relative" data-aos="zoom-in">
              <Image src="/icon/solusi-1.png" className="img-fluid" alt="" width={100} height={100} />
            </div>
          </div>
          <div className='card border-0'>
            <h2 className="text-4xl fw-bold color-palette-1 text-center mb-20">
              Kamu Lagi Butuh Apa Nih ?
            </h2>
          </div>
          <div className='justify-content-center d-flex mb-30'>
            <Image src='/img/body-care-2.png' className='img-fluid' alt='' width={400} height={600} />
          </div>
          <div className='row gap-lg-0 gap-5'>
            <div className="solusi-card d-sm-flex text-center justify-content-center">
              <div className="column-card mb-1" >
                <Link href="/bodycare/#body-scrub">
                  <a className='btn-md text-white text-md' role="button">
                    Body Scrub
                  </a>
                </Link>
              </div>
              <div className="column-card mb-1">
                <Link href='/bodycare/#shower-scrub'>
                  <a className='btn-md text-white text-md' role="button">
                    Shower Scrub
                  </a>
                </Link>
              </div>
              <div className="column-card mb-1">
                <Link href='/bodycare/#body-lotion'>
                  <a className='btn-md text-white text-md' role="button" >
                    Body Lotion
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Scrub */}
      <section id="body-scrub" className='body-scrub pt-3 pb-1'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='d-flex justify-content-center'>
            <div className='position-relative'>
              <Image src='/icon/ic-care.png' width={100} height={100} />
            </div>
          </div>
          <h2 className='text-4xl fw-bold color-palette-1 text-center mb-10'>
            MANFAAT DAN KANDUNGANNYA
          </h2>
          <div className='row gap-lg-0 gap-5'>
            <div className='col-lg-6 col-12 my-auto'>
              <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
                <div className="position-relative" data-aos="zoom-in">
                  <Image src="/img/body-care-3.png" className="img-fluid" alt="" width={300} height={500} />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-center me-lg-5'>
                <div className='position-relative'>
                  <h1 className='text-4xl text-center'>SCARLET
                    <br />
                    BODY SCRUB
                  </h1>
                </div>
              </div>
              <div className='d-flex justify-content-lg-start'>
                <div className='mt-10 mb-40 text-lg'>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'>Membantu mengangkat sel-sel kulit mati pada kulit tubuh
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
                        <p className='color-palette-1'>Mampu Mengembalikan Kelembaban Kulit Tubuh Jadi Ga akan bersisik, mengelupas atau pecah-pecah gitu..
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
                        <p className='color-palette-1'>Membantu meregenerasi kulit yang mencegah penuaan dini !
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
                        <p className='color-palette-1'>Membantu melancarkan peredaran aliran darah sehingga kulit nampak segar</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1 me-2">
                      <div className='position-relative'>
                        <Image src="/icon/body-care-1.png" width={50} height={50} layout="fixed" />
                      </div>
                    </div>
                    <div className="col mt-1">
                      <div className='position-relative'>
                        <p className='color-palette-1 fw-medium text-4xl '>Glutathione</p>
                      </div>
                    </div>
                    <div className="col-1 me-2">
                      <div className='position-relative'>
                        <Image src='/icon/body-care-2.png' width={50} height={50} layout="fixed" />
                      </div>
                    </div>
                    <div className="col mt-1">
                      <div className='position-relative'>
                        <p className='color-palette-1 fw-medium text-4xl '>Vitamin E</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='btn-scrub col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3  mx-auto'>
            <div className="d-sm-flex text-center justify-content-center ">
              <a className='btn-md text-white' role="button" >
                Pesan Sekarang !
              </a>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-3'>
            <p className='color-palette-1'>*Dapatkan Hasil Maksimal Dengan Menggunakan <span className='fw-semibold'>Body Scrub, Body Shower & Body Lotion</span> Bersama Secara Rutin
            </p>
          </div>
        </div>
      </section>

      {/* Shower Scrub */}
      <section id="shower-scrub" className='shower-scrub pt-2 pb-1'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='row gap-lg-0 gap-5'>
            <div className='col-lg-6 col-12 my-auto'>
              <div className="d-flex justify-content-lg-end justify-content-center me-lg-5 mt-lg-5">
                <div className="position-relative" data-aos="zoom-in">
                  <Image src="/img/body-care-4.png" className="img-fluid" alt="" width={300} height={400} />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-center me-lg-5'>
                <div className='position-relative'>
                  <h1 className='text-4xl text-center'>SCARLET
                    <br className=''></br>
                    SHOWER SCRUB
                  </h1>
                </div>
              </div>
              <div className='d-flex justify-content-lg-start'>
                <div className='mt-10 mb-40 text-lg'>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'>Membersihkan tubuh lebih maksimal
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
                        <p className='color-palette-1'>Membantu Mengangkat Sel-Sel Kulit Mati Sehingga Kulit Tubuh Menjadi Lebih Cerah
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
                        <p className='color-palette-1'>Ada butiran halus yang mengeksfoliasi sehingga kulit menjadi lebih lembut
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
                        <p className='color-palette-1'>Membantu Mengembalikan Kelembaban Kulit Tubuh Jadi Ga akan bersisik, mengelupas atau pecah-pecah gitu..</p>
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
                        <p className='color-palette-1'>Membantu mencerahkan kulit tubuh supaya kamu lebih glowing !</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1 me-2">
                      <div className='position-relative'>
                        <Image src="/icon/body-care-1.png" width={50} height={50} layout="fixed" />
                      </div>
                    </div>
                    <div className="col mt-1">
                      <div className='position-relative'>
                        <p className='color-palette-1 fw-medium text-4xl '>Glutathione</p>
                      </div>
                    </div>
                    <div className="col-1 me-2">
                      <div className='position-relative'>
                        <Image src='/icon/body-care-2.png' width={50} height={50} layout="fixed" />
                      </div>
                    </div>
                    <div className="col mt-1">
                      <div className='position-relative'>
                        <p className='color-palette-1 fw-medium text-4xl '>Vitamin E</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1 me-2">
                      <div className='position-relative'>
                        <Image src="/icon/body-care-3.png" width={50} height={50} layout='fixed' />
                      </div>
                    </div>
                    <div className="col mt-1">
                      <div className='position-relative'>
                        <p className='color-palette-1 fw-medium text-4xl '>Beads</p>
                      </div>
                    </div>
                    <div className="col-1 me-2">
                      <div className='position-relative'>
                        <Image src='/icon/body-care-4.png' width={50} height={50} layout="fixed" />
                      </div>
                    </div>
                    <div className="col mt-1">
                      <div className='position-relative'>
                        <p className='color-palette-1 fw-medium text-4xl '>Collagen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='btn-scrub col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3  mx-auto'>
            <div className="d-sm-flex text-center justify-content-center ">
              <a className='btn-md text-white' role="button" >
                Pesan Sekarang !
              </a>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-3'>
            <p className='color-palette-1'>*Dapatkan Hasil Maksimal Dengan Menggunakan <span className='fw-semibold'>Body Scrub, Body Shower & Body Lotion</span> Bersama Secara Rutin
            </p>
          </div>
        </div>
      </section>

      {/* Body Lotion */}
      <section id="body-lotion" className='body-lotion pt-2 pb-1'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='row gap-lg-0 gap-5'>
            <div className='col-lg-6 col-12 my-auto'>
              <div className="d-flex justify-content-lg-end justify-content-center me-lg-5 mt-lg-5">
                <div className="position-relative" data-aos="zoom-in">
                  <Image src="/img/body-care-5.png" className="img-fluid" width={300} height={500} alt="" />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-center me-lg-5'>
                <div className='position-relative'>
                  <h1 className='text-4xl text-center'>SCARLET
                    <br className=''></br>
                    BODY LOTION
                  </h1>
                </div>
              </div>
              <div className='d-flex justify-content-lg-start'>
                <div className='mt-10 mb-40 text-lg'>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'>Menyegarkan dan memberi keharuman tahan lama bikin orang betah deket kamu
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
                        <p className='color-palette-1'>Menutrisi kulit tubuh dengan kandungan terbaik sehingga kulit jadi lebih sehat
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
                        <p className='color-palette-1'>Membantu mencerahkan kulit tubuh supaya kamu lebih glowing !
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
                        <p className='color-palette-1'>Membantu Mengembalikan Kelembaban Kulit Tubuh Jadi Ga akan bersisik, mengelupas atau pecah-pecah gitu..</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1 me-2">
                      <div className='position-relative'>
                        <Image src="/icon/body-care-1.png" width={50} height={50} layout="fixed" />
                      </div>
                    </div>
                    <div className="col mt-1">
                      <div className='position-relative'>
                        <p className='color-palette-1 fw-medium text-4xl '>Glutathione</p>
                      </div>
                    </div>
                    <div className="col-1 me-2">
                      <div className='position-relative'>
                        <Image src='/icon/body-care-2.png' width={50} height={50} layout="fixed" />
                      </div>
                    </div>
                    <div className="col mt-1">
                      <div className='position-relative'>
                        <p className='color-palette-1 fw-medium text-4xl '>Vitamin E</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-1 me-2">
                      <div className='position-relative'>
                        <Image src="/icon/body-care-5.png" width={50} height={50} layout='fixed' />
                      </div>
                    </div>
                    <div className="col mt-1">
                      <div className='position-relative'>
                        <p className='color-palette-1 fw-medium text-4xl '>Niacinamide</p>
                      </div>
                    </div>
                    <div className="col-1 me-2">
                      <div className='position-relative'>
                        <Image src='/icon/body-care-6.png' width={50} height={50} layout="fixed" />
                      </div>
                    </div>
                    <div className="col mt-1">
                      <div className='position-relative'>
                        <p className='color-palette-1 fw-medium text-4xl '>Kojic Acid</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='btn-scrub col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3  mx-auto'>
            <div className="d-sm-flex text-center justify-content-center ">
              <a className='btn-md text-white' role="button" >
                Pesan Sekarang !
              </a>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-3'>
            <p className='color-palette-1'>*Dapatkan Hasil Maksimal Dengan Menggunakan <span className='fw-semibold'>Body Scrub, Body Shower & Body Lotion</span> Bersama Secara Rutin
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default bodyCare;