import { Route, Navigate } from 'react-router-dom';

const AdminRoute = ({ component: Component, isAdmin, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAdmin ? (
        <Component {...props} />
      ) : (
        <Navigate to="/error" />
      )
    }
  />
); export default AdminRoute;