import { Link } from 'react-router-dom';
import { FaGithubAlt } from 'react-icons/fa';

import logo from '../../assets/images/svgs/logo.svg';

function Header() {
  return (
    <header>
      <div class="container mw-1280 flex">
        <div className="logo">
          <img src={logo} className="logo-img" alt="Eden UI" />
          <div className="logo-heading">Eden UI</div>
        </div>

        <nav className="header-nav">
          <ul className="inline-list">
            <li>
              <Link to="/docs">Docs</Link>
            </li>
            <li>Customization</li>
            <li>Templates</li>
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
