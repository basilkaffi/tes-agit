import {
  BrowserRouter,
  Switch, Route, Redirect
} from "react-router-dom";
import { useEffect } from "react";
import { LOGIN } from "./Store/type";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { Dashboard, Cart, Login, Register, Category, Admin } from "./Pages";
import { getProduct } from "./Store/actions/product";
import { getItem } from "./Store/actions/item";

function RouterElement() {

  const routesEnter = [
    {
      path: "/login",
      Component: Login
    },
    {
      path: "/register",
      Component: Register
    },
  ]

  const routes = [
    {
      path: "/category/:category",
      Component: Category
    },
    {
      path: "/cart",
      Component: Cart
    },
    {
      path: "/admin",
      Component: Admin
    },
    {
      path: "/",
      Component: Dashboard
    },
  ];
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if(localStorage.access_token) {
      const data = jwtDecode(localStorage.access_token);
      dispatch({
        type: LOGIN,
        payload: data
      });
    }
    dispatch(getProduct());
    dispatch(getItem());
  }, []);

  return (
    <BrowserRouter basename="/client">
      <Switch>
        {routesEnter.map(({path, Component}, idx) => (
          <Route key={idx} exact path={path} render={() => user.name
            ? <Redirect to="/" />
            : <Component/>}
          />
        ))}
        {routes.map(({path, Component}, idx) => (
          <Route key={idx} exact path={path} render={() => {
            if(user.role === "admin") {
              if(path !== "/admin") {
                return (
                  <Redirect to="/admin" />
                )
              }
              return (
                <Component/>
              )
            } else if(path === "/cart") {
              if(user.name) {
                return (
                  <Component/>
                )
              }
              return (
                <Redirect to="/" />
              )
            } else {
              return path === "/admin" ? <Redirect to="/" /> : <Component />
            }
          }} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default RouterElement;
