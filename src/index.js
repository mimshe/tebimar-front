import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../src/redux/store";
import {PersistGate} from "redux-persist/integration/react";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";

ReactDOM.render(
    <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
            <HashRouter>
                <Switch>
                    <Route path="/admin" render={props => <AdminLayout {...props} />}/>
                    <Route path="/auth" render={props => <AuthLayout {...props} />}/>
                    <Redirect from="/" to="/admin/index"/>
                </Switch>
            </HashRouter>
        </PersistGate>
    </Provider>,
    document.getElementById("root")
);
