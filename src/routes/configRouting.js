import Home from "../page/Home";
import Error404 from "../page/Error 404";

export default [
  {
    path: "/",
    exact: true,
    page: Home,
  },
  {
    path: "*",

    page: Error404,
  },
];
