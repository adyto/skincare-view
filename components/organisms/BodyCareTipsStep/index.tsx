import Image from 'next/image'
import Link from 'next/link'

export default function BodyCareTipsStep() {
  return (
    <>
      <section className='body-care-tips pt-30 pb-20'>
        <div className='container-fluid' data-aos="fade-up">
          <div className="d-flex justify-content-center">
            <div className="position-relative" data-aos="zoom-in">
              <Image src="/icon/solusi-1.png" className="img-fluid" alt="" width={100} height={100} />
            </div>
          </div>
          <div className='card text-card border-0'>
            <h2 className="text-4xl fw-bold color-palette-1 text-center mb-20">
              Cara Merawat Kulit Sesuai Jenisnya ( Tips dan trik)
            </h2>
          </div>
          <div className='justify-content-center d-flex mb-30'>
            <Image src='/img/body-care-tips.png' className='img-fluid' width={300} height={400} alt='' />
          </div>
          <div className='row gap-lg-0 gap-5'>
            <div className="solusi-card d-sm-flex text-center justify-content-center">
              <div className="column-card mb-1" >
                <Link href='/bodycare/bodycare-tips/#dry-skin'>
                  <a className='btn-md text-white text-md' role="button">
                    Kulit Kering
                  </a>
                </Link>
              </div>
              <div className="column-card mb-1">
                <Link href="/bodycare/bodycare-tips/#oily-skin">
                  <a className='btn-md text-white text-md' role="button">
                    Kulit Berminyak
                  </a>
                </Link>
              </div>
              <div className="column-card mb-1">
                <Link href='/bodycare/bodycare-tips/#normal-skin'>
                  <a className='btn-md text-white text-md' role='button'>
                    Kulit Normal
                  </a>
                </Link>
              </div>
              <div className="column-card mb-1">
                <Link href='/bodycare/bodycare-tips/#sensitive-skin'>
                  <a className='btn-md text-white text-md' role='button'>
                    Kulit Sensitif
                  </a>
                </Link>
              </div>
              <div className="column-card mb-1">
                <Link href='/bodycare/bodycare-tips/#combination-skin'>
                  <a className='btn-md text-white text-md' role='button'>
                    Kulit Kombinasi
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
