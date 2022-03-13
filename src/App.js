import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import RejectPage from './pages/Reject';
import IssuePage from './pages/Issue';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/issues/reject" element={<RejectPage />} />
        <Route path="/" element={<IssuePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
