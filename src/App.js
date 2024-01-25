import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { ProductList } from "./pages";
import AddProduct from "./pages/ProductManagement/AddProduct/AddProduct";
import UpdateProducts from "./pages/ProductManagement/UpdateProduct/UpdateProducts";
import ProductList from "./pages/ProductManagement/ProductList/ProductList";

import Home from "./pages/ProductManagement/Home/Home";

import UserRegistration from "./pages/UserManagement/UserRegistration";
import UserLogin from "./pages/UserManagement/UserLogin";
import Searchbar from "./components/SearchBar/Searchbar";

function App() {
  return (
    <div >
      <Navbar />
      <Searchbar />
      <div style={{ minHeight: '50vh' }}>
        <Router>
          <Routes>
            <Route path="/product" element={<ProductList />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="update/:id" element={<UpdateProducts />} />
            <Route path="/" element={< Home />} />

            <Route path="/user-management/register" element={<UserRegistration />} />
            <Route path="/user-management/login" element={<UserLogin />} />

          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
