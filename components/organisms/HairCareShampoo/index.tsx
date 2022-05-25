import Image from 'next/image'
import ColumnItemHairCare from '../../molecules/ColumnItemHairCare'

export default function HairCareShampoo() {
  return (
    <section className='hair-care-shampoo pt-3 pb-1'>
      <div className='container-fluid container-xxl' data-aos="fade-up">
        <div className='d-flex justify-content-center'>
          <div className='position-relative'>
            <Image src='/icon/lamp.png' width={100} height={100} />
          </div>
        </div>
        <h2 className='text-4xl fw-bold color-palette-1 text-center mb-10'>
          APA SAJA MENFAATNYA
        </h2>
        <div className='row gap-lg-0 gap-5 mt-4'>
          <h2 className='d-flex justify-content-center text-4xl color-palette-1'>
            Yordanian Sea Salt Shampoo
          </h2>
          <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
            <div className='d-flex justify-content-lg-end justify-content-center me-lg-5'>
              <Image src='/img/hair-care-4.png' width={300} height={300} />
            </div>
          </div>
          <div className='col-lg-6 col-12 d-lg-block'>
            <div className='d-flex justify-content-lg-start'>
              <div className='mt-3 text-lg'>
                <ColumnItemHairCare desc1='Mengurangi kadar minyak berlebih sehingga rambut tidak lepek' />
                <ColumnItemHairCare desc1='Membersihkan kulit mati dan ketombe di kepala' />
                <ColumnItemHairCare desc1='Pertumbuhan rambut jadi lebih cepat' />
                <ColumnItemHairCare desc1='Memperkuat folikel rambut sehingga tidak mudah rontok' />
                <ColumnItemHairCare desc1='Membantu rambut lebih bervolume jadi lebih tebal  membuat rambut tidak mudah patah ' />
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <p className='color-palette-1'>*Dapatkan perawatan rambut yang lebih maksimal dengan menggunakan secara bersamaan <span className='fw-semibold'>Yordanian Sea Salt Shampoo & Conditioner</span> setiap mencuci rambut. </p>
        </div>
        <div className='btn-shampoo col-9 col-sm-7 col-md-6 col-lg-5 col-xl-4 col-xxl-3  mx-auto'>
          <div className="d-sm-flex text-center justify-content-center ">
            <a className='btn-md text-white' role="button" >
              Pesan Sekarang !
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
