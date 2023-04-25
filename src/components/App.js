import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

export default function App(props) {
  return (
    <div>
      <Router>
        <Routes>
          // This is all just temporary garbage code. FEEL FREE TO DELETE IT ALL.
          <Route path="/Home" element={<Navigate to="/home" />} />
          <Route path="/Search" element={<h1>Home</h1>} />
          <Route path="/Learn" element={<h1>About</h1>} />
        </Routes>
      </Router>
    </div>
  );
}
