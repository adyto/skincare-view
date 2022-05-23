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
                <Link href="/facecare/#toner">
                  <a className='btn-md text-white text-md' role="button">
                    Toner
                  </a>
                </Link>
              </div>
              <div className='column-card mb-1'>
                <Link href="/facecare/#serum">
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
                    Scarlet Facial Wash
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

      {/* Toner */}
      <section id="toner" className='toner pt-5 pb-1'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='d-flex justify-content-center'>
            <div className='position-relative'>
              <Image src="/icon/ic-toner.png" width={100} height={100} />
            </div>
          </div>
          <h2 className='text-4xl fw-bold color-palette-1 text-center mb-10'>
            SCARLET TONER
          </h2>
          <div className='row gap-lg-0 gap-5'>
            <div className='d-flex justify-content-center me-lg-5'>
              <div className='position-relative'>
                <h1 className='text-4xl text-center'>
                  Brightly Essence Toner
                </h1>
              </div>
            </div>
            <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
              <div className='d-flex justify-content-lg-end justify-content-center me-lg-5 mb-lg-5'>
                <Image src="/img/toner-1.png" width={250} height={450} />
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-start'>
                <div className='mt-10 mb-30 text-lg'>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/logo-ceklis.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'><span className='fw-bold'>Vitamin C</span><br />Meningkatkan produksi kolagen membantu regenerasi sel kulit mati</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Glutathione</span><br />Mencerahkan kulit bikin makin glowing</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Witch Hazel Extract</span><br />Membantu meredakan peradangan dan mengencangkan pori-pori</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Allantoin</span><br />Melembabkan, menenangkan, dan sifat anti-iritasi</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Niacinamide</span><br />Membantu mengecilkan pori-pori sehingga kulit wajah menjadi lebih mulus </p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Grape Water </span><br />Melembabkan, menenangkan dan menyegarkan kulit
                          wajah menjadi lebih mulus</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row gap-lg-0 gap-5'>
            <div className='d-flex justify-content-center me-lg-5'>
              <div className='position-relative'>
                <h1 className='text-4xl text-center'>
                  Acne Essence Toner
                </h1>
              </div>
            </div>
            <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
              <div className='d-flex justify-content-lg-end justify-content-center me-lg-5 mb-lg-5'>
                <Image src="/img/toner-2.png" width={250} height={450} />
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
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
                        <p className='color-palette-1'><span className='fw-bold'>Zinc Sebum</span><br />Meminimalkan kemerahan yang diakibatkan oleh jerawat</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Green tea Water & Tea tree Water</span><br />Sifat antimikrobanya mampu mengobati jerawat</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Phyto Squalene</span><br />Sebagai anti-inflamasi yang dapat mengurangi kemerahan dan pembengkakan</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Mugwort Hydrosol</span><br />Melindungi, menutrisi, dan menghidrasi kulit</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Vitamin C</span><br />Meningkatkan produksi kolagen membantu regenerasi sel kulit mati</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Ginkgo Extract</span><br />Meningkatkan kelembapan dan kehalusan kulit</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Succinic Acid</span><br />Mengontrol dan menyeimbangkan produksi sebum sehingga wajah tidak nampak berminyak</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Gluconolactone</span><br />Mengangkat sel kulit mati dengan lembut
                          membentuk permukaan kulit membuat kulit halus dan merata</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='btn-toner col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 mx-auto'>
            <div className='d-sm flex text-center justify-content-center'>
              <a className='btn-md text-white' role="button">
                Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Serum */}
      <section id="serum" className='serum pt-5 pb-1'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='d-flex justify-content-center'>
            <div className='position-relative'>
              <Image src="/icon/ic-serum.png" width={100} height={100} />
            </div>
          </div>
          <h2 className='text-4xl fw-bold color-palette-1 text-center mb-10'>
            SCARLET SERUM
          </h2>
          <div className='row gap-lg-0 gap-5'>
            <div className='d-flex justify-content-center me-lg-5'>
              <div className='position-relative'>
                <h1 className='text-4xl text-center'>
                  Scarlett Brightly Ever After Serum
                </h1>
              </div>
            </div>
            <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
              <div className='d-flex justify-content-lg-end justify-content-center me-lg-5 mb-lg-5'>
                <Image src="/img/serum-1.png" width={250} height={300} />
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-start'>
                <div className='mt-10 text-lg'>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/logo-ceklis.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'><span className='fw-bold'>Phyto Whitening</span><br />Berfungsi untuk menghidrasi dan menjaga kelembapan kulit.</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Vitamin C</span><br />Melembapkan dan mengatasi kulit kering.</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Niacinamide</span><br />Manfaat niacinamide yang paling terasa adalah efeknya dalam melembapkan dan menghaluskan kulit</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Lavender Water</span><br />Zat antiseptik dan anti bakteria yang dapat melawan kuman penyebab jerawat serta mengurangi pembengkakan.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-1 mb-3'>
            <p className='color-palette-1'><span className='fw-bold'>*Perhatian : </span>Jangan menggunakan Brightly serum & Acne serum secara bersamaan. Gunakan satu serum dalam satu waktu
            </p>
          </div>
          <div className='row gap-lg-0 gap-5'>
            <div className='d-flex justify-content-center me-lg-5'>
              <div className='position-relative'>
                <h1 className='text-4xl text-center'>
                  Scarlett Acne Serum
                </h1>
              </div>
            </div>
            <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
              <div className='d-flex justify-content-lg-end justify-content-center me-lg-5 mb-lg-5'>
                <Image src="/img/serum-2.png" width={250} height={300} />
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-start'>
                <div className='mt-10 text-lg'>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/logo-ceklis.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'><span className='fw-bold'>Tea Tree Leaf Water</span><br />Bagus untuk mengobati jerawat karena sifat anti-inflamasi dan antimikroba yang dimiliki.</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Salicylic Acid</span><br />Membersihkan Pori-Pori Kotor Penyebab Jerawat</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Vitamin C</span><br />Melembapkan dan mengatasi kulit kering.</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Jeju Centella Asiatice</span><br />Ekstrak Centella asiatica dapat meningkatkan kadar sebum atau minyak alami kulit, sehingga kelembapan dan elastisitas kulit dapat terjaga.</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Liquorice Extract
                        </span><br />Sebagai pelindung alami kulit dari efek buruk sinar UV berkat kandungan anti-oksidannya.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-1 mb-3'>
            <p className='color-palette-1'><span className='fw-bold'>*Perhatian : </span>Jangan menggunakan Brightly serum & Acne serum secara bersamaan. Gunakan satu serum dalam satu waktu
            </p>
          </div>
          <div className='row gap-lg-0 gap-5'>
            <div className='d-flex justify-content-center me-lg-5'>
              <div className='position-relative'>
                <h1 className='text-4xl text-center'>
                  Scarlett Glowtening Serum
                </h1>
              </div>
            </div>
            <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
              <div className='d-flex justify-content-lg-end justify-content-center me-lg-5 mb-lg-5'>
                <Image src="/img/serum-3.png" width={250} height={300} />
              </div>
            </div>
            <div className='col-lg-6 col-12 d-lg-block'>
              <div className='d-flex justify-content-start'>
                <div className='mt-10 text-lg'>
                  <div className='row'>
                    <div className='col-1'>
                      <div className='position-relative'>
                        <Image src="/icon/logo-ceklis.png" width={30} height={30} layout="fixed" />
                      </div>
                    </div>
                    <div className='col'>
                      <div className='position-relative'>
                        <p className='color-palette-1'><span className='fw-bold'>Tranexamide Acid</span><br />Mencegah dan memudarkan bekas jerawat</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Calendula Oil</span><br />Menangkal radikal bebas kulit jadi awet muda</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>VOlive Oil</span><br />Mampu mempertahankan elastisitas kulit dan cenderung membuatnya halus, kenyal, dan bercahaya.</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Allantoin</span><br />Mengecilkan pori-pori wajah menjadi lebih mulus</p>
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
                        <p className='color-palette-1'><span className='fw-bold'>Licorice Extract
                        </span><br />Menjadi pelindung kulit kamu dari efek buruk sinar UV</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center mt-1 mb-3'>
            <p className='color-palette-1'><span className='fw-bold'>*Perhatian : </span>Jangan menggunakan Brightly serum & Acne serum secara bersamaan. Gunakan satu serum dalam satu waktu
            </p>
          </div>
          <div className='btn-serum col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3 mx-auto'>
            <div className='d-sm flex text-center justify-content-center'>
              <a className='btn-md text-white' role="button">
                Pesan Sekarang
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

