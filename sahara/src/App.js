import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Clothing from './components/Clothing';
import Electronics from './components/Electronics';
import Outdoors from './components/Outdoors';
import RoomKitchen from './components/RoomKitchen';
import Beauty from './components/Beauty';
import Toys from './components/Toys';
import Health from './components/Health';
import ProductDetails from './components/ProductDetails';
import Orders from './components/Orders';
import Cart from './components/Cart';
import Search from './components/Search';
import Account from './components/Account';
import Tabs from './components/Tabs';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <main className="content">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/clothing" element={<Clothing />} />
                    <Route path="/electronics" element={<Electronics />} />
                    <Route path="/outdoors" element={<Outdoors />} />
                    <Route path="/roomkitchen" element={<RoomKitchen />} />
                    <Route path="/beauty" element={<Beauty />} />
                    <Route path="/toys" element={<Toys />} />
                    <Route path="/health" element={<Health />} />
                    <Route path="/product/:productId" element={<ProductDetails />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/tabs" element={<Tabs />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </main>
            <footer className="bottomNav">
                <nav>
                    <Link to="/" className="bottomNavItem">Home</Link>
                    <Link to="/orders" className="bottomNavItem">Orders</Link>
                    <Link to="/cart" className="bottomNavItem">Cart</Link>
                    <Link to="/account" className="bottomNavItem">Account</Link>
                    <Link to="/tabs" className="bottomNavItem">Tabs</Link>
                </nav>
            </footer>
        </Router>
    );
};

export default App;
