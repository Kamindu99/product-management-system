import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductList } from "./pages";

function App() {
  return (
    <div >
      <Navbar />
      <div style={{ minHeight: '50vh' }}>
        <Router>
          <Routes>
            <Route path="/product" element={<ProductList />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;