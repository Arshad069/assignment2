import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle js-sidebar-toggle">
        <i className="hamburger align-self-center"></i>
      </a>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
              <div className="position-relative">
                <i className="align-middle" data-feather="bell"></i>
                <span className="indicator">4</span>
              </div>
            </a>
            {/* Notification dropdown */}
          </li>
          <li className="nav-item dropdown">
            <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
              <i className="align-middle" data-feather="settings"></i>
            </a>
            <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
              <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
            </a>
            {/* Profile dropdown */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
