import Header from './partials/Header';
import Footer from './partials/Footer';

function Layout({ page }) {
  return (
    <div className="layout">
      <div className="top-container">
        <Header />
        <div className="content">
          <main>{page}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
