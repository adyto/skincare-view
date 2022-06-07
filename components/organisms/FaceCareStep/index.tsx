import Image from 'next/image'
import Link from 'next/link'

export default function FaceCareStep() {
  return (
    <section className='face-care-step pt-30 pb-20' data-aos="fade-up">
      <div className='container-fluid container-xxl' >
        <div className='d-flex justify-content-center'>
          <div className='position-relative' data-aos="zoom-in">
            <Image src="/icon/solusi-1.png" className='img-fluid' alt='' width={100} height={100} />
          </div>
        </div>
        <div className='card text-card border-0'>
          <h2 className='text-4xl fw-bold color-palette-1 text-center mb-20'>
            Kamu Lagi Butuh Apa Nih ?
          </h2>
        </div>
        <div className='justify-content-center d-flex mb-30'>
          <Image src="/img/face-care-2.png" className='img-fluid' alt='' width={450} height={450} />
        </div>
        <div className='row gap-lg-0 gap-5'>
          <div className='solusi-card d-sm-flex text-center justify-content-center'>
            <div className='column-card mb-1'>
              <Link href="/facecare/#face-wash">
                <a className='btn-md text-white text-md' role="button">
                  Face Wash
                </a>
              </Link>
            </div>
            <div className='column-card mb-1'>
              <Link href="/facecare/#toner">
                <a className='btn-md text-white text-md' role="button">
                  Toner
                </a>
              </Link>
            </div>
            <div className='column-card mb-1'>
              <Link href="/facecare/#serum">
                <a className='btn-md text-white text-md' role="button">
                  Serum
                </a>
              </Link>
            </div>
            <div className='column-card mb-1'>
              <Link href="/facecare/#cream">
                <a className='btn-md text-white text-md' role="button">
                  Cream
                </a>
              </Link>
            </div>
            <div className='column-card mb-1'>
              <Link href="/facecare/#face-mask">
                <a className='btn-md text-white text-md' role="button">
                  Face Mask
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
