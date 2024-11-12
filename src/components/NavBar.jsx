import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="home" to="/">Home</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
