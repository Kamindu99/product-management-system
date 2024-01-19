import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductList } from "./pages";
import AddProduct from "./pages/ProductManagement/AddProduct";

function App() {
  return (
    <div >
      <Navbar />
      <div style={{ minHeight: '50vh' }}>
        <Router>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />

          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
