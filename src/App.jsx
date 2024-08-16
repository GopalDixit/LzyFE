import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout'; 
import SignUp from './components/SignUp'; 
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
