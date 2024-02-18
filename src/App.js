import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./pages/ProductManagement/AddProduct/AddProduct";
import ProductList from "./pages/ProductManagement/ProductList/ProductList";
import UpdateProducts from "./pages/ProductManagement/UpdateProduct/UpdateProducts";
import Home from "./pages/ProductManagement/Home/Home";
import CreateInquiry from "./pages/InquiryManagement/CreateInquiry";
import UserLogin from "./pages/UserManagement/UserLogin";
import UserProfile from "./pages/UserManagement/UserProfile";
import UserRegistration from "./pages/UserManagement/UserRegistration";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div >
      <Navbar />

      <div style={{ minHeight: '50vh' }}>
        <Router>
          <Routes>
            <Route path="/product-management/product/list" element={<ProductList />} />
            <Route path="/product-management/product/add" element={<AddProduct />} />
            <Route path="/product-management/product/update/:id" element={<UpdateProducts />} />
            <Route path="/" element={< Home />} />

            <Route path="/user-management/register" element={<UserRegistration />} />
            <Route path="/user-management/login" element={<UserLogin />} />
            <Route path="/user-management/user-profile" element={<UserProfile />} />

            <Route path="/inquiry/create" element={<CreateInquiry />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;