import Image from 'next/image'

export default function FaceWash() {
  return (
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
  )
}
