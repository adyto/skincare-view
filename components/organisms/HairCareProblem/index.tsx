import Image from 'next/image'

export default function HairCareProblem() {
    return (
        <section className='hair-care-problem pt-5 pb-1'>
            <div className='container-fluid container-xxl' data-aos="fade-up">
                <div className='d-flex justify-content-center'>
                    <div className='position-relative'>
                        <Image src="/icon/ic-haircare-1.png" width={100} height={100} />
                    </div>
                </div>
                <h2 className='text-4xl fw-bold color-palette-1 text-center mb-10'>
                    HADAPI MASALAH TERSEBUT
                </h2>
                <div className='row gap-lg-0 gap-5'>
                    <div className='col-lg-6 col-12 my-auto' data-aos="zoom-in">
                        <div className='d-flex justify-content-lg-end justify-content-center me-lg-5 '>
                            <Image src="/img/hair-care-3.png" width={400} height={400} />
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 d-lg-block'>
                        <div className='d-flex justify-content-start'>
                            <div className='mt-10 mb-30 text-lg'>
                                <div className='row'>
                                    <div className='col my-5'>
                                        <p className='color-palette-1 fw-normal'>
                                            Jika kamu mengalami masalah-masalah tersebut.<br /> <span className='fw-semibold'>Selamat untuk kamu !!</span><br />Kenapa ? Karena bedasarkan keputusan yang akan kamu ambil selanjutnya, kamu akan bisa mengatakan <span className='d-inline-block fw-semibold mb-3'>" bye bye problem ~ "</span> <span className='d-inline-block mb-3'>Dengan solusi <span className='fw-semibold'>Scarlett Hair Treatment</span> yaitu <span className=' fw-semibold'>Yordanian Sea Salt Shampo & Conditioner</span> kamu bisa melawan semua masalah rambut yang kamu alami itu dengan sangat mudah dan relatif cepat.</span><span className='fw-bold'>Rasakan Sensasi Cuci Rambut di Rumah, Kualitas Cuci Rambut di Salon.</span>
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
