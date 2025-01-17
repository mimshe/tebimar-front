import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
import Home from "views/main/Home/Home.jsx";
import ChooseCity from "views/main/service/ChooseCity.jsx";
import HospitalDetail from "./views/main/service/hospital-detail/HospitalDetail";
import Visa from "./views/main/service/visa/Visa";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/home",
    name: "home",
    icon: "ni ni-circle-08 text-pink",
    component: Home,
    layout: "/main"
  },
  {
    path: "/service/choose-city",
    name: " ChooseCity",
    icon: "ni ni-circle-08 text-pink",
    component:  ChooseCity,
    layout: "/main"
  },
  {
    path: "/service/visa",
    name: " Visa",
    icon: "ni ni-circle-08 text-pink",
    component:  Visa,
    layout: "/main"
  },
  {
    path: "/service/hospital-detail/:id",
    name: " ChooseCity",
    icon: "ni ni-circle-08 text-pink",
    component:  HospitalDetail,
    layout: "/main"
  }
];
export default routes;
