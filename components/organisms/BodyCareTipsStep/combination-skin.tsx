import Image from 'next/image'

export default function CombinationSkin() {
  return (
    <>
      <section id="combination-skin" className='combination-skin pt-3 pb-1'>
        <div className='container-fluid container-xxl' data-aos="fade-up">
          <div className='d-flex justify-content-center'>
            <div className='position-relative'>
              <Image src='/icon/lamp.png' width={100} height={100} />
            </div>
          </div>
          <h2 className='text-4xl fw-bold color-palette-1 text-center mb-2'>
            KULIT KOMBINASI
          </h2>
          <p className="color-palette-1 fw-normal fs-5 mx-2">
            <span className="d-block mb-2">Jenis kulit ini bisa tergolong kering atau normal di beberapa bagian, tetapi berminyak di area hidung, dahi, dan dagu. Kulit kombinasi biasanya terlihat mengkilat dengan pori-pori lebih besar dan mudah berkomedo.</span>
            <span className="d-block mb-2">Anda perlu lebih cermat saat merawat kulit kombinasi, karena bagian yang berminyak dan kering atau normal harus dibersihkan dengan cara yang berbeda. Berikut ini adalah beberapa langkah merawat kulit kombinasi yang dapat Anda lakukan:</span >
          </p>
          <div className='row gap-lg-0 gap-5 mt-4'>
            <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
              <div className='d-flex justify-content-lg-end me-lg-5'>
                <Image src='/img/combination-skin.png' width={400} height={400} />
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
                        <p className="color-palette-1">Menggunakan produk perawatan khusus kulit berminyak di bagian kulit yang berminyak</p>
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
                        <p className="color-palette-1">Menggunakan pelembap hanya di bagian kulit yang kering atau normal</p>
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
                        <p className="color-palette-1">Memilih produk yang mengandung <span className="fst-italic fw-semibold">alpha hydroxy acids (AHA)</span>  dan  <span className="fst-italic fw-semibold">beta hydroxy acids (BHA)</span></p>
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
                        <p className="color-palette-1">Menghindari produk yang mengandung alkohol atau pewangi</p>
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
