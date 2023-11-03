
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import Registration from './Pages/Registration';
import NextRegistration from './Pages/NextRegistration'
import ProductDetails from './Pages/ProductDetails';
import ShoppingCart from './Pages/ShoppingCart';
import Favorites from './Pages/Favorites';
import Categories from './Pages/Categories';


export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/home' exact element={<Home />} />
          <Route path='/SignIn' exact element={<SignIn />} />
          <Route path='/Registration' exact element={<Registration />} />
          <Route path='/NextRegistration' exact element={<NextRegistration />} />
          <Route path='/ProductDetails/:id' exact element={<ProductDetails />} />
          <Route path='/ShoppingCart' exact element={<ShoppingCart />} />
          <Route path='/Favorites' exact element={<Favorites/>} />
          <Route path='/Categories' exact element={<Categories />} />

        </Routes>
      </div>
    </>

  )
}
