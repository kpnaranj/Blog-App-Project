import { Fragment } from "react";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}

export default Layout;
