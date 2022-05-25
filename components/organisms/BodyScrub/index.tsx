import Image from 'next/image'
import ColumnItem from '../../molecules/ColumnItem'

export default function BodyScrub() {
  return (
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
                <ColumnItem desc1="Membantu mengangkat sel-sel kulit mati pada kulit tubuh " />
                <ColumnItem desc1='Mampu Mengembalikan Kelembaban Kulit Tubuh Jadi Ga akan bersisik, mengelupas atau pecah-pecah gitu..' />
                <ColumnItem desc1='Membantu meregenerasi kulit yang mencegah penuaan dini !' />
                <ColumnItem desc1='Membantu melancarkan peredaran aliran darah sehingga kulit nampak segar' />
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
  )
}
