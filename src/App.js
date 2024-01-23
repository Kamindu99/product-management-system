import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { ProductList } from "./pages";
import AddProduct from "./pages/ProductManagement/AddProduct/AddProduct";
import UpdateProducts from "./pages/ProductManagement/UpdateProduct/UpdateProducts";
import ProductList from "./pages/ProductManagement/ProductList/ProductList";
import Home from "./pages/ProductManagement/Home/Home";
function App() {
  return (
    <div >
      <Navbar />
      <div style={{ minHeight: '50vh' }}>
        <Router>
          <Routes>
            <Route path="/product" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="update/:id" element={<UpdateProducts />} />
            <Route path="/" element={< Home />}/>

          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
