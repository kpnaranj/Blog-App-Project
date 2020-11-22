import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
function Sigin() {
  return (
    <Layout>
      <h1>This is the Signin page</h1>
      <Link href="/">
        <a>Return to Home</a>
      </Link>
    </Layout>
  );
}

export default Sigin;
