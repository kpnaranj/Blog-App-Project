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
            <div className="col-md-12 pt-5 pb-3">
              <h2>Create a new blog</h2>
            </div>
          </div>
          <div className="col-md-12">
            <BlogCreate />
          </div>
        </div>
      </Admin>
    </Layout>
  );
}

export default Blog;
