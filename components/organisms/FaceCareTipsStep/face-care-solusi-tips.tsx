import Image from 'next/image'

export interface FaceCareSolusiTipsProps {
  title: string
  desc1: string
  desc2: string
  desc3?: string
  desc4?: string
}

export default function FaceCareSolusiTips(props: Partial<FaceCareSolusiTipsProps>) {
  const { title, desc1, desc2, desc3, desc4 } = props

  return (
    <section className="face-care-solusi-tips pt-3 pb-1" >
      <div className="container-fluid container-xxl" data-aos='fade-up'>
        <div className="d-flex justify-content-center">
          <div className="position-relative">
            <Image src='/icon/lamp.png' width={100} height={100} />
          </div>
        </div>
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-2">
          {title}
        </h2>
        <p className="color-palette-1 fw-normal fs-5 mx-2">
          <span className="d-block mb-3 lh-lg">
            {desc1}
          </span>
          <span className="d-block mb-3 lh-lg">
            {desc2}
          </span>
          <span className="d-block mb-3 lh-lg">
            {desc3}
          </span>
          <span className="d-block mb-3 lh-lg">
            {desc4}
          </span>
        </p>
        <div className='d-flex justify-content-center mt-2'>
          <p className='color-palette-1'>*Rekomendasi perawatan kulit badan dapat menggunakan produk seperti <span className='fw-semibold'>Face Wash, Toner, Serum, Tabir Surya</span> dan <span className="fw-semibold">Face Mask.</span></p>
        </div>
      </div>
    </section>
  )
}
