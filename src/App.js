import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import RejectPage from './pages/Reject';
import IssuePage from './pages/Issue';
import RejectSuccessPage from "./pages/RejectSuccess";
import ForwardSuccessPage from "./pages/ForwardSuccess";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/issues" element={<IssuePage />} />
        <Route path="/issues/reject" element={<RejectPage />} />
        <Route path="/issues/reject/success" element={<RejectSuccessPage />} />
        <Route path="/issues/forward/success" element={<ForwardSuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
