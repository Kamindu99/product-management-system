import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AddProduct from "./pages/ProductManagement/AddProduct/AddProduct";
import UpdateProducts from "./pages/ProductManagement/UpdateProduct/UpdateProducts";
import ProductList from "./pages/ProductManagement/ProductList/ProductList";
import UserRegistration from "./pages/UserManagement/UserRegistration";
import UserLogin from "./pages/UserManagement/UserLogin";
import UserProfile from "./pages/UserManagement/UserProfile";
import CreateInquiry from "./pages/InquiryManagement/CreateInquiry";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

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
