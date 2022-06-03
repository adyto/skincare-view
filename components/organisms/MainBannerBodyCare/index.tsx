import Image from 'next/image'
import Column from './Column'
import Link from 'next/link'
export default function MainBannerBodyCare() {
  return (
    <section className='body-care pt-30 pb-20'>
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
                <h1 className='text-4xl'>Manfaat Percaya Diri Dengan <br />Perawatan Kulit Badan !</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='row gap-lg-0 gap-5'>
          <div className='col-lg-6 col-12 my-auto'>
            <div className='d-flex justify-content-center ms-lg-5'>
              <div className='position-relative'>
                <Image src='/img/body-care-1.png' className='img-fluid' width={350} height={500} />
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-12 d-lg-block'>
            <div className='d-flex justify-content-lg-start'>
              <div className='mt-1 mb-2'>
                <Column desc1='Meningkatkan kepercayaan diri' />
                <Column desc1='Meningkatkan stabilitas keseharian' />
                <Column desc1='Menaikan Mood' />
                <Column desc1='Meningkatkan kesehatan kulit ( Membersihkan, mencerahkan, melembabkan dan menghaluskan)' />
                <Column desc1='Meningkatkan Fungsi Jaringan syaraf dan otot.' />
                <Column desc1='Untuk Merelaksasikan diri' />
                <Column desc1='Untuk Melancarkan peredaran darah' />
                <Column desc1='Membantu  mengurangi dan menyembuhkan stress' />
                <Column desc1='Membantu menyembuhkan insomnia' />
                <Column desc1="Mencegah dan mengurangi sakit kepala" />
              </div>
            </div>
            <div className='d-sm-flex text-center justify-content-center'>
              <Link href='/bodycare/bodycare-tips'>
                <a className='btn-banner text-white' role="button">
                  Tips & Trick !
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
