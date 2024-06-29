import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
};

ProtectRoute.propTypes = {
  children: PropTypes.node,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  redirect: PropTypes.string,
};

export default ProtectRoute;
