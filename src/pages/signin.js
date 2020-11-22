import { Fragment } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Signin_Component from "../components/auth/Signin_Component";

function Sigin() {
  return (
    <Fragment>
      <Layout>
        <h1>This is the signin</h1>
      </Layout>
    </Fragment>
  );
}

export default Sigin;
