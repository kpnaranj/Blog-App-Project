import React from "react";
import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";

function AdminUser() {
  return (
    <Layout>
      <Admin>
        <h2>Admin Dashboard</h2>
      </Admin>
    </Layout>
  );
}

export default AdminUser;
