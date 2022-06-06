import Image from 'next/image'

export default function SensitiveSkin() {
  return (
    <section id="sensitive-skin" className='sensitive-skin pt-3 pb-1'>
      <div className='container-fluid container-xxl' data-aos="fade-up">
        <div className='d-flex justify-content-center'>
          <div className='position-relative'>
            <Image src='/icon/lamp.png' width={100} height={100} />
          </div>
        </div>
        <h2 className='text-4xl fw-bold color-palette-1 text-center mb-2'>
          KULIT SENSITIF
        </h2>
        <p className="color-palette-1 fw-normal fs-5 mx-2">
          <span className="d-block mb-2">Kulit sensitif sering kali ditandai dengan kulit yang terasa gatal, terbakar, kering, dan kemerahan. Pemilik kulit sensitif juga sebaiknya memilih produk dengan kandungan bahan kimia rendah.</span>
          <span className="d-block mb-2">Hal ini dikarenakan semakin sedikit bahan kimia yang terkandung, semakin rendah pula risiko iritasi kulit yang mungkin terjadi.Untuk merawat atau mengatasi kulit sensitif, Anda bisa mengikuti beberapa langkah perawatan kulit berikut ini:</span >
        </p>
        <div className='row gap-lg-0 gap-5 mt-4'>
          <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
            <div className='d-flex justify-content-lg-end me-lg-5'>
              <Image src='/img/sensitive-skin.png' width={400} height={400} />
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
                      <p className="color-palette-1">Mengenali dan menghindari faktor pemicu iritasi kulit, misalnya suhu panas atau dingin, paparan debu, atau bahan kimia yang bersifat iritatif</p>
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
                      <p className="color-palette-1">Menggunakan pembersih dengan bahan alami yang baik untuk kulit sensitif, seperti lidah buaya, chamomile, atau teh hijau</p>
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
                      <p className="color-palette-1">Menghindari produk yang mengandung alkohol, sabun, pewangi, dan zat asam</p>
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
                      <p className="color-palette-1">Memilih produk khusus kulit sensitif yang berlabel <span className="fst-italic fw-semibold">hypoallergenic</span></p>
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
  )
}
