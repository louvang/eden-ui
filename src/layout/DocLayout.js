import Header from './partials/Header';
import DocSidebar from './partials/DocSidebar';
import Footer from './partials/Footer';

function DocLayout({ page }) {
  return (
    <div className="layout">
      <Header />
      <div class="container">
        <div className="content content--doc">
          <DocSidebar />
          <main>{page}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DocLayout;
