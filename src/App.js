import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Index from './Pages/Index';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Login from './Pages/Login';
import ShopCardDetail from './Pages/ShopCardDetail';

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path='/' element={<Index />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />

            <Route
              path='shop/product/:productId'
              element={<ShopCardDetail />}
            />
            <Route path='about' element={<About />} />
          </Route>
        ) : (
          <Route path='/' element={<Navigate to='login' />} />
        )}
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
