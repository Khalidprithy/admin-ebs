import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Loading from '../Pages/Shared/Loading';
import { selectCurrentToken } from '../redux/slice/authentication';

const RequireAuth = () => {
   const token = useSelector(selectCurrentToken);

   const isLoading = useSelector(state => state.authentication.isLoading);

   if (isLoading) {
      return <Loading />;
   }

   return token ? <Outlet /> : <Navigate to='/' replace />;
};

export default RequireAuth;
