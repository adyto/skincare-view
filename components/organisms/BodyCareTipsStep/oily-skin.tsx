import Image from 'next/image'

export default function OilySkin() {
  return (
    <>
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
                        <p className="color-palette-1">Menggunakan produk perawatan berlabel bebas minyak atau <span className="fst-italic fw-semibold">noncomedogenic</span> yang tidak menyumbat pori-pori</p>
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
    </>
  )
}
