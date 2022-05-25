import Image from 'next/image'

export default function MainBannerHairCare() {
  return (
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
  )
}
