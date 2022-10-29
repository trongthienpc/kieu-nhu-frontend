import React from "react";
import Footer from "../containers/navs/Footer";
import Sidebar from "../containers/navs/Sidebar";
import TopNav from "../containers/navs/TopNav";
const AppLayout = ({ containerClassnames, children, history }) => {
  return (
    <div id="app-container" className={containerClassnames}>
      <TopNav history={history} />
      <Sidebar />
      <main>
        <div className="container-fluid">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
