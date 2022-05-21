import cx from 'classnames';
import Link from 'next/link';

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
  subTitle?: string;
  subTitle2?: string;
  subTitle3?: string;
  subTitle4?: string;

}

export default function Menu(props: Partial<MenuProps>) {
  const { title, active, subTitle, subTitle2, subTitle3, subTitle4, href = '/' } = props;
  const classTitle = cx({
    'nav-link dropdown-toggle ': true,
    active,
  });
  return (
    <li className="nav-item dropdown my-auto">
      <Link href={href}>
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >{title}</a>
      </Link>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <button className="dropdown-item ">{subTitle}</button>
          <button className="dropdown-item ">{subTitle2}</button>
          <button className="dropdown-item ">{subTitle3}</button>
          <button className="dropdown-item ">{subTitle4}</button>
        </li>
      </ul>
    </li>
  );
}


