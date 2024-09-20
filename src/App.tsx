import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import ProductManagement from "./pages/Management/ProductManagement";
import TransactionManagement from "./pages/Management/TransactionManagement";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customer = lazy(() => import("./pages/Customer"));
const Transaction = lazy(() => import("./pages/Transaction"));
const NewProduct = lazy(() => import("./pages/Management/NewProduct"));

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customer />} />
            <Route path="/admin/transaction" element={<Transaction />} />

            {/* Charts */}

            <Route path="/admin/chart/bar" element={<Dashboard />} />
            <Route path="/admin/chart/pie" element={<Dashboard />} />
            <Route path="/admin/chart/line" element={<Dashboard />} />

            {/* Apps */}

            <Route path="/admin/app/stopwatch" element={<Dashboard />} />
            <Route path="/admin/app/coupon" element={<Dashboard />} />
            <Route path="/admin/app/toss" element={<Dashboard />} />

            {/* Management */}

            <Route path="/admin/product/new" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<ProductManagement />} />
            <Route path="/admin/transaction/:id" element={<TransactionManagement />} />

          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
