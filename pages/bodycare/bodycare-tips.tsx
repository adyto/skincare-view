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
      <section className='body-care-tips pt-30 pb-20'>
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
                <Link href="/bodycare/bodycare-tips/#oily-skin">
                  <a className='btn-md text-white text-md' role="button">
                    Kulit Berminyak
                  </a>
                </Link>
              </div>
              <div className="column-card mb-1">
                <Link href='/bodycare/bodycare-tips/#normal-skin'>
                  <a className='btn-md text-white text-md' role='button'>
                    Kulit Normal
                  </a>
                </Link>
              </div>
              <div className="column-card mb-1">
                <Link href='/bodycare/bodycare-tips/#sensitive-skin'>
                  <a className='btn-md text-white text-md' role='button'>
                    Kulit Sensitif
                  </a>
                </Link>
              </div>
              <div className="column-card mb-1">
                <Link href='/bodycare/bodycare-tips/#combination-skin'>
                  <a className='btn-md text-white text-md' role='button'>
                    Kulit Kombinasi
                  </a>
                </Link>
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
        </div>
      </section>

      {/* Oily Skin */}
      <section id="oily-skin" className='oily-skin pt-3 pb-1'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='d-flex justify-content-center'>
            <div className='position-relative'>
              <Image src='/icon/lamp.png' width={100} height={100} />
            </div>
          </div>
          <h2 className='text-4xl fw-bold color-palette-1 text-center mb-2'>
            KULIT BERMINYAK
          </h2>
          <p className="color-palette-1 fw-normal fs-5 mx-2">
            <span className="d-block mb-2">Kulit berminyak biasanya terlihat kusam atau berkilau dan memiliki pori-pori besar. Tipe kulit ini juga lebih mudah berkomedo dan muncul jerawat. Kulit bisa lebih berminyak ketika kelenjar minyak (kelenjar sebasea) di kulit menghasilkan terlalu banyak sebum.</span>
            <span className="d-block mb-2">Ada beberapa faktor yang dapat membuat seseorang lebih rentan mengalami kulit berminyak, di antaranya faktor genetik, stres, udara lembap, dan perubahan hormon, misalnya pada remaja yang memasuki masa pubertas.</span ><span className="d-block mb-2">Kulit berminyak dapat dirawat dengan beberapa cara berikut ini:</span>
          </p>
          <div className='row gap-lg-0 gap-5 mt-4'>
            <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
              <div className='d-flex justify-content-lg-end me-lg-5'>
                <Image src='/img/oily-skin.png' width={400} height={400} />
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
                        <p className="color-palette-1">Menggunakan produk perawatan berlabel bebas minyak atau noncomedogenic yang tidak menyumbat pori-pori</p>
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
                        <p className="color-palette-1">Mencuci wajah 2 kali sehari, khususnya saat kulit wajah berkeringat</p>
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
                        <p className="color-palette-1">Menghindari memencet jerawat karena dapat meninggalkan bekas luka yang sulit hilang</p>
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
                        <p className="color-palette-1">Menggunakan produk perawatan kulit berbahan dasar air agar tidak membuat kulit semakin berminyak dan mencegah munculnya jerawat</p>
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
        </div>
      </section>

      {/* Normal Skin */}
      <section id="normal-skin" className='normal-skin pt-3 pb-1'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='d-flex justify-content-center'>
            <div className='position-relative'>
              <Image src='/icon/lamp.png' width={100} height={100} />
            </div>
          </div>
          <h2 className='text-4xl fw-bold color-palette-1 text-center mb-2'>
            KULIT NORMAL
          </h2>
          <div className='row gap-lg-0 gap-5 mt-4'>
            <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
              <div className='d-flex justify-content-lg-end me-lg-5'>
                <Image src='/img/normal-skin.png' width={400} height={400} />
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-lg-start'>
                <div className='mt-4 fs-5'>
                  <div className="row">
                    <div className="col-1">
                      <div className="position-relative">
                        <Image src='/icon/logo-ceklis.png' width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="position-relative">
                        <p className="color-palette-1">Kulit normal umumnya tampak merona, tidak kusam, berminyak, atau kering, serta tidak memiliki banyak kerutan. Tipe kulit normal juga lebih mudah dirawat daripada jenis kulit lainnya.</p>
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
                        <p className="color-palette-1">Jika kulit Anda termasuk tipe kulit normal, Anda hanya perlu rutin menggunakan pelembap berbahan dasar air yang bersifat ringan dan tidak lengket untuk menjaga kelembapan alami kulit.</p>
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
        </div>
      </section>
    </>
  )
}

export default BodyCareTips;
