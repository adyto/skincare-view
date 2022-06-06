import Image from 'next/image'
import Link from 'next/link'
import Column from './Column'

export default function MainBannerFaceCare() {
  return (
    <section className='face-care pt-30 pb-20'>
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
                <h1 className='text-4xl'>Manfaat Perawatan Wajah, <br /> Makin Percaya Diri dengan Wajah Bersih dan Cantik</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='row gap-lg-0 gap-5'>
          <div className='col-lg-6 col-12 my-auto'>
            <div className='d-flex justify-content-center ms-lg-5'>
              <div className='position-relative'>
                <Image src='/img/face-care.png' className='img-fluid' width={400} height={500} />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-12 d-lg-block'>
            <div className='position-relative'>
              <div className='mt-4 mb-4'>
                <Column desc1='Mencerahkan kulit wajah' />
                <Column desc1='Menyamarkan noda hitam' />
                <Column desc1='Menjaga Kelembapan wajah' />
                <Column desc1='Optimalkan Regenerasi kulit' />
                <Column desc1='Mencegah Penuaan dini' />
              </div>
            </div>
            <div className='d-sm-flex text-center justify-content-center'>
              <Link href='/facecare/facecare-tips'>
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
