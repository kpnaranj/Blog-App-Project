import { Fragment } from "react";
import { useEffect } from "react";
import Router from "next/router";
import { isAuth } from "../../actions/auth";

function Private({ children }) {
  //Check first if the user is autherized
  useEffect(() => {
    if (!isAuth()) {
      Router.push("/signin");
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default Private;
