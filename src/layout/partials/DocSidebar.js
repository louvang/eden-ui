import { Link } from 'react-router-dom';

function DocSidebar() {
  return (
    <div>
      <div class="sidebar-title">Layout</div>
      <ul>
        <li>Containers</li>
        <li>Columns</li>
        <li>Gutters</li>
        <li>Grids</li>
      </ul>

      <div class="sidebar-title">Content</div>
      <ul>
        <li>
          <Link to="/docs/content/typography">Typography</Link>
        </li>
        <li>Images</li>
        <li>Tables</li>
        <li>Buttons</li>
        <li>Media</li>
        <li>Code</li>
      </ul>

      <div class="sidebar-title">Forms</div>
      <ul>
        <li>Form Layouts</li>
        <li>Input</li>
        <li>Select</li>
        <li>Radio/Check</li>
        <li>Textarea</li>
        <li>Fieldset/Legend</li>
        <li>Datepicker</li>
        <li>Input Masking</li>
      </ul>

      <div class="sidebar-title">Components</div>
      <ul>
        <li>Accordion</li>
        <li>Alerts</li>
        <li>Badges</li>
        <li>Breadcrumbs</li>
        <li>Carousel/Slider</li>
        <li>Card</li>
        <li>Collapse</li>
        <li>Dropdown</li>
        <li>Modal</li>
        <li>Navigation</li>
        <li>Notification</li>
        <li>Pagination</li>
        <li>Panel</li>
        <li>Sidebar</li>
        <li>Spinner</li>
        <li>Tab</li>
        <li>Tooltip</li>
      </ul>

      <div class="sidebar-title">Helpers</div>
      <ul>
        <li>Typography</li>
        <li>Truncation</li>
        <li>Colors &amp; Filters</li>
        <li>Spacing</li>
        <li>Positioning</li>
        <li>Visibility</li>
        <li>CSS Flex</li>
        <li>CSS Grid</li>
        <li>Mobile</li>
      </ul>
    </div>
  );
}

export default DocSidebar;
