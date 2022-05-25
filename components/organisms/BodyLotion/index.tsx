import Image from 'next/image'

export default function BodyLotion() {
  return (
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
  )
}
