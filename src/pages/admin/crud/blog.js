import React from "react";
import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Link from "next/link";
import BlogCreate from "../../../components/crud/BlogCreate";

function Blog() {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-5 pb-5">
              <h2>Create a new blog</h2>
            </div>
            <div className="col-md-6">
              <BlogCreate />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
}

export default Blog;
