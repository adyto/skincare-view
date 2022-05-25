import Image from 'next/image'

export default function MainBannerBodyCare() {
  return (
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
  )
}
