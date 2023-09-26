import { Link } from 'react-router-dom';
import './DocSidebar.scss';

function DocSidebar() {
  return (
    <div className="doc-sidebar">
      <section class="sidebar-section">
        <div className="sidebar-title">Layout</div>
        <ul class="no-bullets-list sidebar-nav-list">
          <li>
            <Link to="/docs">Containers</Link>
          </li>
          <li>
            <Link to="/docs">Columns</Link>
          </li>
          <li>
            <Link to="/docs">Gutters</Link>
          </li>
          <li>
            <Link to="/docs">Grids</Link>
          </li>
        </ul>
      </section>

      <section class="sidebar-section">
        <div className="sidebar-title">Content</div>
        <ul class="no-bullets-list sidebar-nav-list">
          <li>
            <Link to="/docs/content/typography">Typography</Link>
          </li>
          <li>
            <Link to="/docs">Images</Link>
          </li>
          <li>
            <Link to="/docs">Tables</Link>
          </li>
          <li>
            <Link to="/docs">Buttons</Link>
          </li>
          <li>
            <Link to="/docs">Media</Link>
          </li>
          <li>
            <Link to="/docs">Code</Link>
          </li>
        </ul>
      </section>

      <section class="sidebar-section">
        <div className="sidebar-title">Forms</div>
        <ul class="no-bullets-list sidebar-nav-list">
          <li>
            <Link to="/docs">Form Layouts</Link>
          </li>
          <li>
            <Link to="/docs">Input</Link>
          </li>
          <li>
            <Link to="/docs">Select</Link>
          </li>
          <li>
            <Link to="/docs">Radio/Check</Link>
          </li>
          <li>
            <Link to="/docs">Textarea</Link>
          </li>
          <li>
            <Link to="/docs">Fieldset/Legend</Link>
          </li>
          <li>
            <Link to="/docs">Datepicker</Link>
          </li>
          <li>
            <Link to="/docs">Input Masking</Link>
          </li>
        </ul>
      </section>

      <section class="sidebar-section">
        <div className="sidebar-title">Components</div>
        <ul class="no-bullets-list sidebar-nav-list">
          <li>
            <Link to="/docs">Accordion</Link>
          </li>
          <li>
            <Link to="/docs">Alerts</Link>
          </li>
          <li>
            <Link to="/docs">Badges</Link>
          </li>
          <li>
            <Link to="/docs">Breadcrumbs</Link>
          </li>
          <li>
            <Link to="/docs">Carousel/Slider</Link>
          </li>
          <li>
            <Link to="/docs">Card</Link>
          </li>
          <li>
            <Link to="/docs">Collapse</Link>
          </li>
          <li>
            <Link to="/docs">Dropdown</Link>
          </li>
          <li>
            <Link to="/docs">Modal</Link>
          </li>
          <li>
            <Link to="/docs">Navigation</Link>
          </li>
          <li>
            <Link to="/docs">Notification</Link>
          </li>
          <li>
            <Link to="/docs">Pagination</Link>
          </li>
          <li>
            <Link to="/docs">Panel</Link>
          </li>
          <li>
            <Link to="/docs">Sidebar</Link>
          </li>
          <li>
            <Link to="/docs">Spinner</Link>
          </li>
          <li>
            <Link to="/docs">Tab</Link>
          </li>
          <li>
            <Link to="/docs">Tooltip</Link>
          </li>
        </ul>
      </section>

      <section class="sidebar-section">
        <div className="sidebar-title">Helpers</div>
        <ul class="no-bullets-list sidebar-nav-list">
          <li>
            <Link to="/docs">Typography</Link>
          </li>
          <li>
            <Link to="/docs">Truncation</Link>
          </li>
          <li>
            <Link to="/docs">Colors &amp; Filters</Link>
          </li>
          <li>
            <Link to="/docs">Spacing</Link>
          </li>
          <li>
            <Link to="/docs">Positioning</Link>
          </li>
          <li>
            <Link to="/docs">Visibility</Link>
          </li>
          <li>
            <Link to="/docs">CSS Flex</Link>
          </li>
          <li>
            <Link to="/docs">CSS Grid</Link>
          </li>
          <li>
            <Link to="/docs">Mobile</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default DocSidebar;
