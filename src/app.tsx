import React, { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { store } from "./core/store";
import { getData } from "./api";
import routes from "./routes";
import CustomLayout from "./components/custom-layout";
import "./app.css";

const App = () => {
  const { dispatch } = useContext(store);

  useEffect(() => {
    getData().then((data) => dispatch({ type: "LOAD_REGIONS", payload: data }));
  }, []);

  return (
    <CustomLayout>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={route.children}
          />
        ))}
      </Switch>
    </CustomLayout>
  );
};

export default App;
