import Image from 'next/image'

export default function DrySkin() {
  return (
    <>
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
    </>
  )
}
