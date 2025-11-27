// import Devices from "./pages/Devices";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Devices />
//     </div>
//   );
// }


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Devices from "./pages/Devices";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Devices />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
