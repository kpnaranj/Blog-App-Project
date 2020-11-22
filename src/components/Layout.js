import { Fragment } from "react";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <p>Footer</p>
    </Fragment>
  );
}

export default Layout;
