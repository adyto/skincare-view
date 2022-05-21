import Image from 'next/image';

export default function Footer() {
  return (
    <section className="footer pt-50" id="contact">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="/#" className="mb-30">
                <Image src="/icon/logo1.png" width={60} height={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Skincare Solution
                <br />
                {' '}
                Informasi skincare yang dibutuhkan
                {' '}
                <br />
                {' '}
                untuk kebutuhan perawatan badan
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">Hubungi Kami</p>
                  <ul className="list-unstyled">
                    <li className="mb-6">
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=skincare@gmail.com"
                        className="text-lg color-palette-1 text-decoration-none"
                        target="_blank"
                      >
                        skincare@gmail.com
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="#contact"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        Depok,
                        Jawa Barat
                      </a>
                    </li>
                    <li className="mb-6">
                      <a
                        href="https://wa.me/6281281903574?text=Layanan%20Contact%20Center"
                        className="text-lg color-palette-1 text-decoration-none"
                      >
                        021 - 8190 -
                        3574
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
