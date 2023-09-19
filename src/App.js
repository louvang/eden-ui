import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import DocLayout from './layout/DocLayout';
import Homepage from './pages/Homepage';
import Docs from './pages/Docs';
import Typography from './pages/content/Typography';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout page={<Homepage />} />} />
        <Route path="/docs" element={<DocLayout page={<Docs />} />} />
        <Route
          path="/docs/content/typography"
          element={<DocLayout page={<Typography />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
