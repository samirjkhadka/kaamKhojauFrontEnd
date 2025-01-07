import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Dashboard from "./pages/Dashboard";
import PostApplication from "./pages/PostApplication";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/post/application/:jobId"
            element={<PostApplication />}
          ></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
