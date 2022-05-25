import Image from 'next/image'

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
                                <h1 className='text-4xl'>Wajah Bersih, Cantik <br /> Bercahaya Bikin Tampil Makin Percaya Diri !</h1>
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
                        <div className='d-flex justify-content-center me-lg-5 justify-content-lg-start mt-4'>
                            <div className='position-relative'>
                                <p className='color-palette-1 text-xl'><span className='fw-normal d-inline-block mb-2'>Kulit wajah kusam dan berjerawat memang sering kali menjadi penyebab kita kehilangan kepercayaan diri kita.</span><br /><span className='fw-normal d-inline-block mb-2'>Gimana engga.. karena memang banyak orang yang menilai diri kita bedasarkan tampilan luar kita</span><br /><span className='fw-normal d-inline-block mb-2'>Ditambah orang cenderung melihat kearah wajah lebih dulu..</span><br /><span className='fw-normal d-inline-block mb-2'>Eitsss tapi bukan berarti ga ada yang bisa kamu lakukan kok !</span><br /><span className='fw-bold d-inline-block mb-2'>Balikin Percaya Diri Kamu Dengan Rangkain Face Care Dari Scarlett !</span>
                                </p>
                                <div className='d-sm-flex text-center justify-content-center'>
                                    <a className='btn-banner text-white' role="button">
                                        Pesan Sekarang Juga !
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
