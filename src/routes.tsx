import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import SecretRoom from "./pages/secretRoom/SecretRoom";
import SecretRoomDenied from "./pages/secretRoomDenied/SecretRoomDenied";
import Dashboard from "./pages/dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/register/Register";

function AppRouter() {
  const haveAccess = true;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {haveAccess && <Route path="/secret-route" element={<SecretRoom />} />}
        {haveAccess && <Route path="/dashboard" element={<Dashboard />} />}
        {!haveAccess && (
          <Route path="/secret-route" element={<SecretRoomDenied />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
