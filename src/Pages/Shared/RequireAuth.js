import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
    const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to='/' replace />;
};

export default RequireAuth;
