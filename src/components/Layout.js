import { Fragment } from "react";

function Layout({ children }) {
  return (
    <Fragment>
      <p>Header</p>
      {children}
      <p>Footer</p>
    </Fragment>
  );
}

export default Layout;
