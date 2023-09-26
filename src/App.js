import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import DocLayout from './layout/DocLayout';
import Homepage from './pages/Homepage';
import Docs from './pages/Docs';
import Customization from './pages/Customization';
import Templates from './pages/Templates';
import Typography from './pages/docs/content/Typography';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout page={<Homepage />} />} />
        <Route path="/docs" element={<DocLayout page={<Docs />} />} />
        <Route
          path="/customization"
          element={<Layout page={<Customization />} />}
        />
        <Route path="/templates" element={<Layout page={<Templates />} />} />

        {/* Documentation Pages */}
        <Route
          path="/docs/content/typography"
          element={<DocLayout page={<Typography />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
