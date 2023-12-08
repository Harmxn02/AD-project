import React from "react";
import PropTypes from "prop-types";
import Sidebar from "@/components/dashboard/Sidebar";

const Layout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
