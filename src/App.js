import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {NavBar} from './components/navbar.jsx';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
function App() {
  return (
    <div className="App">
        <Router>
            <NavBar></NavBar>
            <Routes>
                <Route path="/"  element={<Shop />}/>
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
