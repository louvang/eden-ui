import Header from './partials/Header';
import DocSidebar from './partials/DocSidebar';
import Footer from './partials/Footer';

function DocLayout({ page }) {
  return (
    <div className="layout">
      <div class="top-container">
        <Header />
        <div class="container">
          <div className="content content--doc">
            <DocSidebar />
            <main>{page}</main>
          </div>
        </div>
      </div>
      <div class="bot-container">
        <Footer />
      </div>
    </div>
  );
}

export default DocLayout;
