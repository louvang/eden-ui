import Header from './partials/Header';
import DocSidebar from './partials/DocSidebar';
import Footer from './partials/Footer';

function DocLayout({ page }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <DocSidebar />
        <main>{page}</main>
      </div>
      <Footer />
    </div>
  );
}

export default DocLayout;
