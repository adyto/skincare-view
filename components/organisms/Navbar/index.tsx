import Image from 'next/image';
import Menu from './Menu';
import Auth from './Auth';

interface NavBarProps {
  activeMenu: 'home' | 'bodycare' | 'facecare' | 'haircare'
}

export default function NavBar(props: NavBarProps) {
  const { activeMenu } = props;
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <Image src="/icon/logo-skincare.png" className='rounded-circle' width={60} height={60} />
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
              <Menu title="Home" active={activeMenu === 'home'} href="/#" />
              <Menu title="Body Care" active={activeMenu === 'bodycare'} href='/bodycare' />
              <Menu title="Face Care" active={activeMenu === 'facecare'} href='/facecare' />
              <Menu title="Hair Care" active={activeMenu === 'haircare'} href='/haircare' />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}