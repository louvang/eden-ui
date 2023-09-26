import { Link } from 'react-router-dom';
import { FaGithubAlt } from 'react-icons/fa';

import logo from '../../assets/images/svgs/logo.svg';

function Header() {
  return (
    <header>
      <div className="container mw-1440 flex">
        <div className="logo">
          <Link to="/">
            <img src={logo} className="logo-img" alt="Eden UI" />
          </Link>
          <div className="logo-heading">
            <Link to="/">Eden UI</Link>
          </div>
        </div>

        <nav className="header-nav">
          <ul className="inline-list">
            <li>
              <Link to="/docs">Docs</Link>
            </li>
            <li>
              <Link to="/customization">Customization</Link>
            </li>
            <li>
              <Link to="/templates">Templates</Link>
            </li>
          </ul>

          <ul className="inline-list">
            <li className="flex-vcenter">
              <FaGithubAlt size="1.5em" title="GitHub" aria-label="GitHub" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
