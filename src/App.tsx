import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Products from "./pages/Products";

const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Dashboard />} />
            <Route path="/admin/transaction" element={<Dashboard />} />

            {/* Charts */}

            <Route path="/admin/chart/bar" element={<Dashboard />} />
            <Route path="/admin/chart/pie" element={<Dashboard />} />
            <Route path="/admin/chart/line" element={<Dashboard />} />

            {/* Apps */}

            <Route path="/admin/app/stopwatch" element={<Dashboard />} />
            <Route path="/admin/app/coupon" element={<Dashboard />} />
            <Route path="/admin/app/toss" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
