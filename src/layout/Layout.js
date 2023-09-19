import Header from './partials/Header';
import Footer from './partials/Footer';

function Layout({ page }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <main>{page}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
