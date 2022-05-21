import Image from 'next/image';
import Menu from './Menu';
import Auth from './Auth';
import Link from 'next/link';

export default function index() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <Image src="/icon/logo1.png" width={60} height={60} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <li className="nav-item dropdown my-auto">
                <Link href={'/#'}><a className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Fashion</a></Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href={'/test'}><button className="dropdown-item">Amanah Collection</button></Link>
                    <button className="dropdown-item ">Trend</button>
                    <button className="dropdown-item ">Hijab</button>
                    <button className="dropdown-item ">Shopping Directory</button>
                  </li>
                </ul>
              </li>
              <Menu title="Beauty" />
              <Menu title="Stylo Expert" />
              <Menu title="Stylovers" />
              <Menu title="Stylo Editor's Choice" />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}