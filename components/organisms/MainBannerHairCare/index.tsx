import Image from 'next/image'
import Column from './Column'
import Link from 'next/link'
export default function MainBannerHairCare() {
  return (
    <section className='hair-care pt-30 pb-20'>
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
                <h1 className='text-4xl mt-3 fw-semibold'>MANFAAT PERAWATAN RAMBUT</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='row gap-lg-0 gap-5'>
          <div className='col-lg-6 col-12 my-auto'>
            <div className='d-flex justify-content-center ms-lg-5'>
              <div className='position-relative'>
                <Image src='/img/hair-care-1.png' className='img-fluid' width={400} height={500} />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-12 d-lg-block'>
            <div className='d-flex justify-content-start mt-4'>
              <div className='position-relative'>
                <Column desc1='Menghilangkan mikroorganisme kulit kepala' />
                <Column desc1='Menambah rasa nyaman' />
                <Column desc1='Membasmi kutu atau ketombe yang melekat pada kulit' />
                <Column desc1='Memperlancar sistem peredaran darah di bawah' />
              </div>
            </div>
            <div className='d-sm-flex text-center justify-content-center'>
              <Link href='/haircare/haircare-tips'>
                <a className='btn-banner text-white' role="button">
                  Tips & Trick
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
