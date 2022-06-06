import Image from 'next/image'
export default function FaceCareTipsStep() {
  return (
    <section className="face-care-tips pt-30 pb-20">
      <div className="container-fluid" data-aos="fade-up">
        <div className="d-flex justify-content-center">
          <Image src="/icon/solusi-1.png" className="img-fluid" alt="" width={100} height={100} />
        </div>
        <div className="card text-card border-0">
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-20">
            Cara Merawat Kulit Wajah ( Tips dan Trik )
          </h2>
        </div>
        <div className="d-flex justify-content-center mb-30">
          <Image src='/img/body-care-tips.png' className='img-fluid' width={300} height={400} alt='' />
        </div>
      </div>
    </section>
  )
}
