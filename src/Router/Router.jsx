import { Route, Routes } from 'react-router-dom';
import Customers from '../Pages/Customers/Customers';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Products from '../Pages/Products/Products';
import NotFound from '../Pages/Shared/NotFound';
import SignIn from '../Pages/SignIn/SignIn';

const Router = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<SignIn />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/customers' element={<Customers />}></Route>
            <Route path='*' element={<NotFound />}></Route>
         </Routes>
      </>
   );
};

export default Router;
