import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import SignupComponent from "../components/auth/Signup_Component";
function Signup() {
  return (
    <Layout>
      <h1>This is the signup</h1>
      <SignupComponent />
    </Layout>
  );
}

export default Signup;
