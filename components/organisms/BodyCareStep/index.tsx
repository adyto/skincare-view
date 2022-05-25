import Image from 'next/image'
import Link from 'next/link'
export default function BodyCareStep() {
  return (
    <section className='body-care-step pt-30 pb-20'>
      <div className='container-fluid container-xxl' data-aos="fade-up">
        <div className="d-flex justify-content-center">
          <div className="position-relative" data-aos="zoom-in">
            <Image src="/icon/solusi-1.png" className="img-fluid" alt="" width={100} height={100} />
          </div>
        </div>
        <div className='card border-0'>
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-20">
            Kamu Lagi Butuh Apa Nih ?
          </h2>
        </div>
        <div className='justify-content-center d-flex mb-30'>
          <Image src='/img/body-care-2.png' className='img-fluid' alt='' width={400} height={600} />
        </div>
        <div className='row gap-lg-0 gap-5'>
          <div className="solusi-card d-sm-flex text-center justify-content-center">
            <div className="column-card mb-1" >
              <Link href="/bodycare/#body-scrub">
                <a className='btn-md text-white text-md' role="button">
                  Body Scrub
                </a>
              </Link>
            </div>
            <div className="column-card mb-1">
              <Link href='/bodycare/#body-shower-scrub'>
                <a className='btn-md text-white text-md' role="button">
                  Shower Scrub
                </a>
              </Link>
            </div>
            <div className="column-card mb-1">
              <Link href='/bodycare/#body-lotion'>
                <a className='btn-md text-white text-md' role="button" >
                  Body Lotion
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
