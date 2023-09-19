function Footer() {
  return (
    <footer>
      <div className="container mw-1280 flex jc-sb">
        <div className="footer-main">
          <div className="logo-heading logo-heading--mini">
            <div className="mini-logo-heading">Eden UI</div>
          </div>
          This work is licensed under{' '}
          <a
            href="https://chooser-beta.creativecommons.org/#:~:text=This%20work%20is%20licensed%20under%20CC%20BY%2DSA%204.0"
            target="_blank"
            rel="noreferrer"
          >
            CC BY-SA 4.0
          </a>
        </div>

        <div className="footer-nav">
          <div className="footer-nav__col">
            <div className="footer-nav__col-title">Links</div>
            <ul className="no-bullets-list">
              <li>Docs</li>
              <li>Customization</li>
              <li>Templates</li>
            </ul>
          </div>

          <div className="footer-nav__col">
            <div className="footer-nav__col-title">Connect</div>
            <ul className="no-bullets-list">
              <li>About</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
