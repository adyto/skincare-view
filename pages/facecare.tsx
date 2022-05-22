import type { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/organisms/Navbar'
import Footer from '../components/organisms/Footer'

const faceCare: NextPage = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Navbar />
      {/* Main Banner Face Care */}
      <section className='face-care pt-30 pb-20'>
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
                  <h1 className='text-4xl'>Wajah Bersih, Cantik <br /> Bercahaya Bikin Tampil Makin Percaya Diri !</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='row gap-lg-0 gap-5'>
            <div className='col-lg-6 col-12 my-auto'>
              <div className='d-flex justify-content-center ms-lg-5'>
                <div className='position-relative'>
                  <Image src='/img/face-care.png' className='img-fluid' width={400} height={500} />
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-center me-lg-5 justify-content-lg-start mt-4'>
                <div className='position-relative'>
                  <p className='color-palette-1 text-xl'><span className='fw-normal d-inline-block mb-2'>Kulit wajah kusam dan berjerawat memang sering kali menjadi penyebab kita kehilangan kepercayaan diri kita.</span><br /><span className='fw-normal d-inline-block mb-2'>Gimana engga.. karena memang banyak orang yang menilai diri kita bedasarkan tampilan luar kita</span><br /><span className='fw-normal d-inline-block mb-2'>Ditambah orang cenderung melihat kearah wajah lebih dulu..</span><br /><span className='fw-normal d-inline-block mb-2'>Eitsss tapi bukan berarti ga ada yang bisa kamu lakukan kok !</span><br /><span className='fw-bold d-inline-block mb-2'>Balikin Percaya Diri Kamu Dengan Rangkain Face Care Dari Scarlett !</span>
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

      {/* Face Solution */}
      <section className='face-solution pt-30 pb-20' data-aos="fade-up">
        <div className='container-fluid container-xxl' >
          <div className='d-flex justify-content-center'>
            <div className='position-relative' data-aos="zoom-in">
              <Image src="/icon/solusi-1.png" className='img-fluid' alt='' width={100} height={100} />
            </div>
          </div>
          <div className='card text-card border-0'>
            <h2 className='text-4xl fw-bold color-palette-1 text-center mb-20'>
              Kamu Lagi Butuh Apa Nih ?
            </h2>
          </div>
          <div className='justify-content-center d-flex mb-30'>
            <Image src="/img/face-care-2.png" className='img-fluid' alt='' width={450} height={450} />
          </div>
          <div className='row gap-lg-0 gap-5'>
            <div className='solusi-card d-sm-flex text-center justify-content-center'>
              <div className='column-card mb-1'>
                <Link href="/facecare/#face-wash">
                  <a className='btn-md text-white text-md' role="button">
                    Face Wash
                  </a>
                </Link>
              </div>
              <div className='column-card mb-1'>
                <Link href="/facecare/#">
                  <a className='btn-md text-white text-md' role="button">
                    Toner
                  </a>
                </Link>
              </div>
              <div className='column-card mb-1'>
                <Link href="/facecare/#">
                  <a className='btn-md text-white text-md' role="button">
                    Serum
                  </a>
                </Link>
              </div>
              <div className='column-card mb-1'>
                <Link href="/facecare/#">
                  <a className='btn-md text-white text-md' role="button">
                    Cream
                  </a>
                </Link>
              </div>
              <div className='column-card mb-1'>
                <Link href="/facecare/#">
                  <a className='btn-md text-white text-md' role="button">
                    Face Mask
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Face Wash */}
      <section id='face-wash' className='face-wash pt-3 pb-1'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='d-flex justify-content-center'>
            <div className='position-relative'>
              <Image src="/icon/ic-care.png" width={100} height={100} />
            </div>
          </div>
          <h2 className='text-4xl fw-bold color-palette-1 text-center mb-10'>
            MANFAAT DAN KANDUNGANNYA
          </h2>
          <div className='row gap-lg-0 gap-5'>
            <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
              <div className='d-flex justify-content-lg-end justify-content-center me-lg-5'>
                <Image src="/img/face-care-3.png" width={250} height={350} />
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-center me-lg-5'>
                <div className='position-relative'>
                  <h1 className='text-4xl text-center'>
                    SCARLET<br /> FACE WASH
                  </h1>
                </div>
              </div>
              <div className='d-flex justify-content-start'>
                <div className='mt-10 mb-40 text-lg'>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/logo-ceklis.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'><span className='fw-bold'>Vitamin E</span><br /> Zat aktif nya mampu mencerahkan kulit wajah</p>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/logo-ceklis.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'><span className='fw-bold'>Glutathione</span><br />Kandungan anti-oksidannnya membuat kulit lebih kuat, sehat, dan terlihat lebih glowing.</p>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/logo-ceklis.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'><span className='fw-bold'>Aloe Vera
                        </span><br />Membantu mengatasi kulit sensitif seperti peradangan dan kemerahan pada wajah. </p>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/logo-ceklis.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'><span className='fw-bold'>Rose Petal
                        </span><br />Meningkatkan kelembapan dan kadar oksidan, mecegah kulit kering dan wajah berminyak </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='btn-face-wash col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 mx-auto'>
            <div className='d-sm-flex text-center justify-content-center'>
              <a className='btn-md text-white' role="button">
                Pesan Sekarang !
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default faceCare;

