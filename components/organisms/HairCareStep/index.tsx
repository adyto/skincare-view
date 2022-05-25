import Image from 'next/image'

export default function HairCareStep() {
  return (
    <section className='hair-care-step pt-30 pb-20' >
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
  )
}
