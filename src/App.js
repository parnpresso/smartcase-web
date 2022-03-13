import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import RejectPage from './pages/Reject';
import IssuePage from './pages/Issue';
<<<<<<< HEAD
import Home from './pages/Home';
=======
import RejectSuccessPage from "./pages/RejectSuccess";

>>>>>>> 3e52e015ccc411e597e7431314cdef7052bfbcea
function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
=======
        <Route path="/issues" element={<IssuePage />} />
>>>>>>> 3e52e015ccc411e597e7431314cdef7052bfbcea
        <Route path="/issues/reject" element={<RejectPage />} />
        <Route path="/issues/reject/success" element={<RejectSuccessPage />} />
        <Route path="/" element={<IssuePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
