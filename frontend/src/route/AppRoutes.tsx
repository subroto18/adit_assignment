import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layout/MainLayout";
import LoginPage from "@/pages/LoginPage";

const AppRoutes = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        ></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
