import { Fragment } from "react";
import { useEffect } from "react";
import Router from "next/router";
import { isAuth } from "../../actions/auth";

function Admin({ children }) {
  //Check first if the user is autherized
  useEffect(() => {
    if (!isAuth()) {
      Router.push("/signin");
    } else if (isAuth().role !== 1) {
      Router.push("/");
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default Admin;
