import React from 'react'

const Feature = () => {
  return (
    <div><div clasName="wrapper">
    <nav id="sidebar" clasName="sidebar js-sidebar">
        <div clasName="sidebar-content js-simplebar">
            <a clasName="sidebar-brand" href="index.html">
      <span clasName="align-middle">AdminKit</span>
    </a>

            <ul clasName="sidebar-nav">
                <li clasName="sidebar-header">
                    Pages
                </li>

                <li clasName="sidebar-item">
                    <a clasName="sidebar-link" href="index.html">
          <i clasName="align-middle" data-feather="sliders"></i> <span clasName="align-middle">Dashboard</span>
        </a>
                </li>

                <li clasName="sidebar-item">
                    <a clasName="sidebar-link" href="pages-profile.html">
          <i clasName="align-middle" data-feather="user"></i> <span clasName="align-middle">Profile</span>
        </a>
                </li>

                <li clasName="sidebar-item">
                    <a clasName="sidebar-link" href="pages-sign-in.html">
          <i clasName="align-middle" data-feather="log-in"></i> <span clasName="align-middle">Sign In</span>
        </a>
                </li>

                <li clasName="sidebar-item">
                    <a clasName="sidebar-link" href="pages-sign-up.html">
          <i clasName="align-middle" data-feather="user-plus"></i> <span clasName="align-middle">Sign Up</span>
        </a>
                </li>

                <li clasName="sidebar-item">
                    <a clasName="sidebar-link" href="pages-blank.html">
          <i clasName="align-middle" data-feather="book"></i> <span clasName="align-middle">Blank</span>
        </a>
                </li>

                <li clasName="sidebar-header">
                    Tools & Components
                </li>

                <li clasName="sidebar-item">
                    <a clasName="sidebar-link" href="ui-buttons.html">
          <i clasName="align-middle" data-feather="square"></i> <span clasName="align-middle">Buttons</span>
        </a>
                </li>

                <li clasName="sidebar-item">
                    <a clasName="sidebar-link" href="ui-forms.html">
          <i clasName="align-middle" data-feather="check-square"></i> <span clasName="align-middle">Forms</span>
        </a>
                </li>

                <li clasName="sidebar-item">
                    <a clasName="sidebar-link" href="ui-cards.html">
          <i clasName="align-middle" data-feather="grid"></i> <span clasName="align-middle">Cards</span>
        </a>
                </li>

                <li clasName="sidebar-item">
                    <a clasName="sidebar-link" href="ui-typography.html">
          <i clasName="align-middle" data-feather="align-left"></i> <span clasName="align-middle">Typography</span>
        </a>
                </li>

                <li clasName="sidebar-item active">
                    <a clasName="sidebar-link" href="icons-feather.html">
          <i clasName="align-middle" data-feather="coffee"></i> <span clasName="align-middle">Icons</span>
        </a>
                </li>

                <li clasName="sidebar-header">
                    Plugins & Addons
                </li>

                <li clasName="sidebar-item">
                    <a clasName="sidebar-link" href="charts-chartjs.html">
          <i clasName="align-middle" data-feather="bar-chart-2"></i> <span clasName="align-middle">Charts</span>
        </a>
                </li>

                <li clasName="sidebar-item">
                    <a clasName="sidebar-link" href="maps-google.html">
          <i clasName="align-middle" data-feather="map"></i> <span clasName="align-middle">Maps</span>
        </a>
                </li>
            </ul>

            <div clasName="sidebar-cta">
                <div clasName="sidebar-cta-content">
                    <strong clasName="d-inline-block mb-2">Upgrade to Pro</strong>
                    <div clasName="mb-3 text-sm">
                        Are you looking for more components? Check out our premium version.
                    </div>
                    <div clasName="d-grid">
                        <a href="upgrade-to-pro.html" clasName="btn btn-primary">Upgrade to Pro</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div clasName="main">
        <nav clasName="navbar navbar-expand navbar-light navbar-bg">
            <a clasName="sidebar-toggle js-sidebar-toggle">
      <i clasName="hamburger align-self-center"></i>
    </a>

            <div clasName="navbar-collapse collapse">
                <ul clasName="navbar-nav navbar-align">
                    <li clasName="nav-item dropdown">
                        <a clasName="nav-icon dropdown-toggle" href="/" id="alertsDropdown" data-bs-toggle="dropdown">
                            <div clasName="position-relative">
                                <i clasName="align-middle" data-feather="bell"></i>
                                <span clasName="indicator">4</span>
                            </div>
                        </a>
                        <div clasName="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                            <div clasName="dropdown-menu-header">
                                4 New Notifications
                            </div>
                            <div clasName="list-group">
                                <a href="/" clasName="list-group-item">
                                    <div clasName="row g-0 align-items-center">
                                        <div clasName="col-2">
                                            <i clasName="text-danger" data-feather="alert-circle"></i>
                                        </div>
                                        <div clasName="col-10">
                                            <div clasName="text-dark">Update completed</div>
                                            <div clasName="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                            <div clasName="text-muted small mt-1">30m ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" clasName="list-group-item">
                                    <div clasName="row g-0 align-items-center">
                                        <div clasName="col-2">
                                            <i clasName="text-warning" data-feather="bell"></i>
                                        </div>
                                        <div clasName="col-10">
                                            <div clasName="text-dark">Lorem ipsum</div>
                                            <div clasName="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                            <div clasName="text-muted small mt-1">2h ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" clasName="list-group-item">
                                    <div clasName="row g-0 align-items-center">
                                        <div clasName="col-2">
                                            <i clasName="text-primary" data-feather="home"></i>
                                        </div>
                                        <div clasName="col-10">
                                            <div clasName="text-dark">Login from 192.186.1.8</div>
                                            <div clasName="text-muted small mt-1">5h ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" clasName="list-group-item">
                                    <div clasName="row g-0 align-items-center">
                                        <div clasName="col-2">
                                            <i clasName="text-success" data-feather="user-plus"></i>
                                        </div>
                                        <div clasName="col-10">
                                            <div clasName="text-dark">New connection</div>
                                            <div clasName="text-muted small mt-1">Christina accepted your request.</div>
                                            <div clasName="text-muted small mt-1">14h ago</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div clasName="dropdown-menu-footer">
                                <a href="/" clasName="text-muted">Show all notifications</a>
                            </div>
                        </div>
                    </li>
                    <li clasName="nav-item dropdown">
                        <a clasName="nav-icon dropdown-toggle" href="/" id="messagesDropdown" data-bs-toggle="dropdown">
                            <div clasName="position-relative">
                                <i clasName="align-middle" data-feather="message-square"></i>
                            </div>
                        </a>
                        <div clasName="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                            <div clasName="dropdown-menu-header">
                                <div clasName="position-relative">
                                    4 New Messages
                                </div>
                            </div>
                            <div clasName="list-group">
                                <a href="/" clasName="list-group-item">
                                    <div clasName="row g-0 align-items-center">
                                        <div clasName="col-2">
                                            <img src="img/avatars/avatar-5.jpg" clasName="avatar img-fluid rounded-circle" alt="Vanessa Tucker"/>
                                        </div>
                                        <div clasName="col-10 ps-2">
                                            <div clasName="text-dark">Vanessa Tucker</div>
                                            <div clasName="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                            <div clasName="text-muted small mt-1">15m ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" clasName="list-group-item">
                                    <div clasName="row g-0 align-items-center">
                                        <div clasName="col-2">
                                            <img src="img/avatars/avatar-2.jpg" clasName="avatar img-fluid rounded-circle" alt="William Harris"/>
                                        </div>
                                        <div clasName="col-10 ps-2">
                                            <div clasName="text-dark">William Harris</div>
                                            <div clasName="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                                            <div clasName="text-muted small mt-1">2h ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" clasName="list-group-item">
                                    <div clasName="row g-0 align-items-center">
                                        <div clasName="col-2">
                                            <img src="img/avatars/avatar-4.jpg" clasName="avatar img-fluid rounded-circle" alt="Christina Mason"/>
                                        </div>
                                        <div clasName="col-10 ps-2">
                                            <div clasName="text-dark">Christina Mason</div>
                                            <div clasName="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                                            <div clasName="text-muted small mt-1">4h ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" clasName="list-group-item">
                                    <div clasName="row g-0 align-items-center">
                                        <div clasName="col-2">
                                            <img src="img/avatars/avatar-3.jpg" clasName="avatar img-fluid rounded-circle" alt="Sharon Lessman"/>
                                        </div>
                                        <div clasName="col-10 ps-2">
                                            <div clasName="text-dark">Sharon Lessman</div>
                                            <div clasName="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                                            <div clasName="text-muted small mt-1">5h ago</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div clasName="dropdown-menu-footer">
                                <a href="/" clasName="text-muted">Show all messages</a>
                            </div>
                        </div>
                    </li>
                    <li clasName="nav-item dropdown">
                        <a clasName="nav-icon dropdown-toggle d-inline-block d-sm-none" href="/" data-bs-toggle="dropdown">
            <i clasName="align-middle" data-feather="settings"></i>
          </a>

                        <a clasName="nav-link dropdown-toggle d-none d-sm-inline-block" href="/" data-bs-toggle="dropdown">
            <img src="img/avatars/avatar.jpg" clasName="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span clasName="text-dark">Charles Hall</span>
          </a>
                        <div clasName="dropdown-menu dropdown-menu-end">
                            <a clasName="dropdown-item" href="pages-profile.html"><i clasName="align-middle me-1" data-feather="user"></i> Profile</a>
                            <a clasName="dropdown-item" href="/"><i clasName="align-middle me-1" data-feather="pie-chart"></i> Analytics</a>
                            <div clasName="dropdown-divider"></div>
                            <a clasName="dropdown-item" href="index.html"><i clasName="align-middle me-1" data-feather="settings"></i> Settings & Privacy</a>
                            <a clasName="dropdown-item" href="/"><i clasName="align-middle me-1" data-feather="help-circle"></i> Help Center</a>
                            <div clasName="dropdown-divider"></div>
                            <a clasName="dropdown-item" href="/">Log out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <main clasName="content">
            <div clasName="container-fluid p-0">

                <div clasName="mb-3">
                    <h1 clasName="h3 d-inline align-middle">Feather</h1>
                    <a clasName="badge bg-dark text-white ms-2" href="upgrade-to-pro.html">
  Get more icons
</a>
                </div>
                <div clasName="card">
                    <div clasName="card-header">
                        <h3 clasName="card-title">Feather Icons</h3>
                        <h6 clasName="card-subtitle text-muted">Simply beautiful open source icons</h6>
                    </div>
                    <div clasName="card-body">
                        <div clasName="row">
                            <div clasName="col-12 col-md-6 col-lg-3">
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="activity"></i> <span clasName="align-middle">activity</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="airplay"></i> <span clasName="align-middle">airplay</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="alert-circle"></i> <span clasName="align-middle">alert-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="alert-octagon"></i> <span clasName="align-middle">alert-octagon</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="alert-triangle"></i> <span clasName="align-middle">alert-triangle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="align-center"></i> <span clasName="align-middle">align-center</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="align-justify"></i> <span clasName="align-middle">align-justify</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="align-left"></i> <span clasName="align-middle">align-left</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="align-right"></i> <span clasName="align-middle">align-right</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="anchor"></i> <span clasName="align-middle">anchor</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="aperture"></i> <span clasName="align-middle">aperture</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="arrow-down"></i> <span clasName="align-middle">arrow-down</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="arrow-down-circle"></i> <span clasName="align-middle">arrow-down-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="arrow-down-left"></i> <span clasName="align-middle">arrow-down-left</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="arrow-down-right"></i> <span clasName="align-middle">arrow-down-right</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="arrow-left"></i> <span clasName="align-middle">arrow-left</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="arrow-left-circle"></i> <span clasName="align-middle">arrow-left-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="arrow-right"></i> <span clasName="align-middle">arrow-right</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="arrow-right-circle"></i> <span clasName="align-middle">arrow-right-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="arrow-up"></i> <span clasName="align-middle">arrow-up</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="arrow-up-circle"></i> <span clasName="align-middle">arrow-up-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="arrow-up-left"></i> <span clasName="align-middle">arrow-up-left</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="arrow-up-right"></i> <span clasName="align-middle">arrow-up-right</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="at-sign"></i> <span clasName="align-middle">at-sign</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="award"></i> <span clasName="align-middle">award</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="bar-chart"></i> <span clasName="align-middle">bar-chart</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="bar-chart-2"></i> <span clasName="align-middle">bar-chart-2</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="battery"></i> <span clasName="align-middle">battery</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="battery-charging"></i> <span clasName="align-middle">battery-charging</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="bell"></i> <span clasName="align-middle">bell</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="bell-off"></i> <span clasName="align-middle">bell-off</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="bluetooth"></i> <span clasName="align-middle">bluetooth</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="bold"></i> <span clasName="align-middle">bold</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="book"></i> <span clasName="align-middle">book</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="book-open"></i> <span clasName="align-middle">book-open</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="bookmark"></i> <span clasName="align-middle">bookmark</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="box"></i> <span clasName="align-middle">box</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="briefcase"></i> <span clasName="align-middle">briefcase</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="calendar"></i> <span clasName="align-middle">calendar</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="camera"></i> <span clasName="align-middle">camera</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="camera-off"></i> <span clasName="align-middle">camera-off</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="cast"></i> <span clasName="align-middle">cast</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="check"></i> <span clasName="align-middle">check</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="check-circle"></i> <span clasName="align-middle">check-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="check-square"></i> <span clasName="align-middle">check-square</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="chevron-down"></i> <span clasName="align-middle">chevron-down</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="chevron-left"></i> <span clasName="align-middle">chevron-left</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="chevron-right"></i> <span clasName="align-middle">chevron-right</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="chevron-up"></i> <span clasName="align-middle">chevron-up</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="chevrons-down"></i> <span clasName="align-middle">chevrons-down</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="chevrons-left"></i> <span clasName="align-middle">chevrons-left</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="chevrons-right"></i> <span clasName="align-middle">chevrons-right</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="chevrons-up"></i> <span clasName="align-middle">chevrons-up</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="chrome"></i> <span clasName="align-middle">chrome</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="circle"></i> <span clasName="align-middle">circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="clipboard"></i> <span clasName="align-middle">clipboard</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="clock"></i> <span clasName="align-middle">clock</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="cloud"></i> <span clasName="align-middle">cloud</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="cloud-drizzle"></i> <span clasName="align-middle">cloud-drizzle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="cloud-lightning"></i> <span clasName="align-middle">cloud-lightning</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="cloud-off"></i> <span clasName="align-middle">cloud-off</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="cloud-rain"></i> <span clasName="align-middle">cloud-rain</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="cloud-snow"></i> <span clasName="align-middle">cloud-snow</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="code"></i> <span clasName="align-middle">code</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="codepen"></i> <span clasName="align-middle">codepen</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="command"></i> <span clasName="align-middle">command</span>
                                </div>
                            </div>
                            <div clasName="col-12 col-md-6 col-lg-3">
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="compass"></i> <span clasName="align-middle">compass</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="copy"></i> <span clasName="align-middle">copy</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="corner-down-left"></i> <span clasName="align-middle">corner-down-left</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="corner-down-right"></i> <span clasName="align-middle">corner-down-right</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="corner-left-down"></i> <span clasName="align-middle">corner-left-down</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="corner-left-up"></i> <span clasName="align-middle">corner-left-up</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="corner-right-down"></i> <span clasName="align-middle">corner-right-down</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="corner-right-up"></i> <span clasName="align-middle">corner-right-up</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="corner-up-left"></i> <span clasName="align-middle">corner-up-left</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="corner-up-right"></i> <span clasName="align-middle">corner-up-right</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="cpu"></i> <span clasName="align-middle">cpu</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="credit-card"></i> <span clasName="align-middle">credit-card</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="crop"></i> <span clasName="align-middle">crop</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="crosshair"></i> <span clasName="align-middle">crosshair</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="database"></i> <span clasName="align-middle">database</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="delete"></i> <span clasName="align-middle">delete</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="disc"></i> <span clasName="align-middle">disc</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="dollar-sign"></i> <span clasName="align-middle">dollar-sign</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="download"></i> <span clasName="align-middle">download</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="download-cloud"></i> <span clasName="align-middle">download-cloud</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="droplet"></i> <span clasName="align-middle">droplet</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="edit"></i> <span clasName="align-middle">edit</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="edit-2"></i> <span clasName="align-middle">edit-2</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="edit-3"></i> <span clasName="align-middle">edit-3</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="external-link"></i> <span clasName="align-middle">external-link</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="eye"></i> <span clasName="align-middle">eye</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="eye-off"></i> <span clasName="align-middle">eye-off</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="facebook"></i> <span clasName="align-middle">facebook</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="fast-forward"></i> <span clasName="align-middle">fast-forward</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="feather"></i> <span clasName="align-middle">feather</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="file"></i> <span clasName="align-middle">file</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="file-minus"></i> <span clasName="align-middle">file-minus</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="file-plus"></i> <span clasName="align-middle">file-plus</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="file-text"></i> <span clasName="align-middle">file-text</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="film"></i> <span clasName="align-middle">film</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="filter"></i> <span clasName="align-middle">filter</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="flag"></i> <span clasName="align-middle">flag</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="folder"></i> <span clasName="align-middle">folder</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="folder-minus"></i> <span clasName="align-middle">folder-minus</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="folder-plus"></i> <span clasName="align-middle">folder-plus</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="git-branch"></i> <span clasName="align-middle">git-branch</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="git-commit"></i> <span clasName="align-middle">git-commit</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="git-merge"></i> <span clasName="align-middle">git-merge</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="git-pull-request"></i> <span clasName="align-middle">git-pull-request</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="github"></i> <span clasName="align-middle">github</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="gitlab"></i> <span clasName="align-middle">gitlab</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="globe"></i> <span clasName="align-middle">globe</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="grid"></i> <span clasName="align-middle">grid</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="hard-drive"></i> <span clasName="align-middle">hard-drive</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="hash"></i> <span clasName="align-middle">hash</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="headphones"></i> <span clasName="align-middle">headphones</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="heart"></i> <span clasName="align-middle">heart</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="help-circle"></i> <span clasName="align-middle">help-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="home"></i> <span clasName="align-middle">home</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="image"></i> <span clasName="align-middle">image</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="inbox"></i> <span clasName="align-middle">inbox</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="info"></i> <span clasName="align-middle">info</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="instagram"></i> <span clasName="align-middle">instagram</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="italic"></i> <span clasName="align-middle">italic</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="layers"></i> <span clasName="align-middle">layers</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="layout"></i> <span clasName="align-middle">layout</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="link"></i> <span clasName="align-middle">link</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="link-2"></i> <span clasName="align-middle">link-2</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="linkedin"></i> <span clasName="align-middle">linkedin</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="list"></i> <span clasName="align-middle">list</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="loader"></i> <span clasName="align-middle">loader</span>
                                </div>
                            </div>
                            <div clasName="col-12 col-md-6 col-lg-3">
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="lock"></i> <span clasName="align-middle">lock</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="log-in"></i> <span clasName="align-middle">log-in</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="log-out"></i> <span clasName="align-middle">log-out</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="mail"></i> <span clasName="align-middle">mail</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="map"></i> <span clasName="align-middle">map</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="map-pin"></i> <span clasName="align-middle">map-pin</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="maximize"></i> <span clasName="align-middle">maximize</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="maximize-2"></i> <span clasName="align-middle">maximize-2</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="menu"></i> <span clasName="align-middle">menu</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="message-circle"></i> <span clasName="align-middle">message-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="message-square"></i> <span clasName="align-middle">message-square</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="mic"></i> <span clasName="align-middle">mic</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="mic-off"></i> <span clasName="align-middle">mic-off</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="minimize"></i> <span clasName="align-middle">minimize</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="minimize-2"></i> <span clasName="align-middle">minimize-2</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="minus"></i> <span clasName="align-middle">minus</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="minus-circle"></i> <span clasName="align-middle">minus-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="minus-square"></i> <span clasName="align-middle">minus-square</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="monitor"></i> <span clasName="align-middle">monitor</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="moon"></i> <span clasName="align-middle">moon</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="more-horizontal"></i> <span clasName="align-middle">more-horizontal</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="more-vertical"></i> <span clasName="align-middle">more-vertical</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="move"></i> <span clasName="align-middle">move</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="music"></i> <span clasName="align-middle">music</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="navigation"></i> <span clasName="align-middle">navigation</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="navigation-2"></i> <span clasName="align-middle">navigation-2</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="octagon"></i> <span clasName="align-middle">octagon</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="package"></i> <span clasName="align-middle">package</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="paperclip"></i> <span clasName="align-middle">paperclip</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="pause"></i> <span clasName="align-middle">pause</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="pause-circle"></i> <span clasName="align-middle">pause-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="percent"></i> <span clasName="align-middle">percent</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="phone"></i> <span clasName="align-middle">phone</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="phone-call"></i> <span clasName="align-middle">phone-call</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="phone-forwarded"></i> <span clasName="align-middle">phone-forwarded</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="phone-incoming"></i> <span clasName="align-middle">phone-incoming</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="phone-missed"></i> <span clasName="align-middle">phone-missed</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="phone-off"></i> <span clasName="align-middle">phone-off</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="phone-outgoing"></i> <span clasName="align-middle">phone-outgoing</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="pie-chart"></i> <span clasName="align-middle">pie-chart</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="play"></i> <span clasName="align-middle">play</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="play-circle"></i> <span clasName="align-middle">play-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="plus"></i> <span clasName="align-middle">plus</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="plus-circle"></i> <span clasName="align-middle">plus-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="plus-square"></i> <span clasName="align-middle">plus-square</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="pocket"></i> <span clasName="align-middle">pocket</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="power"></i> <span clasName="align-middle">power</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="printer"></i> <span clasName="align-middle">printer</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="radio"></i> <span clasName="align-middle">radio</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="refresh-ccw"></i> <span clasName="align-middle">refresh-ccw</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="refresh-cw"></i> <span clasName="align-middle">refresh-cw</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="repeat"></i> <span clasName="align-middle">repeat</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="rewind"></i> <span clasName="align-middle">rewind</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="rotate-ccw"></i> <span clasName="align-middle">rotate-ccw</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="rotate-cw"></i> <span clasName="align-middle">rotate-cw</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="rss"></i> <span clasName="align-middle">rss</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="save"></i> <span clasName="align-middle">save</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="scissors"></i> <span clasName="align-middle">scissors</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="search"></i> <span clasName="align-middle">search</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="send"></i> <span clasName="align-middle">send</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="server"></i> <span clasName="align-middle">server</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="settings"></i> <span clasName="align-middle">settings</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="share"></i> <span clasName="align-middle">share</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="share-2"></i> <span clasName="align-middle">share-2</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="shield"></i> <span clasName="align-middle">shield</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="shield-off"></i> <span clasName="align-middle">shield-off</span>
                                </div>
                            </div>
                            <div clasName="col-12 col-md-6 col-lg-3">
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="shopping-bag"></i> <span clasName="align-middle">shopping-bag</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="shopping-cart"></i> <span clasName="align-middle">shopping-cart</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="shuffle"></i> <span clasName="align-middle">shuffle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="sidebar"></i> <span clasName="align-middle">sidebar</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="skip-back"></i> <span clasName="align-middle">skip-back</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="skip-forward"></i> <span clasName="align-middle">skip-forward</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="slack"></i> <span clasName="align-middle">slack</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="slash"></i> <span clasName="align-middle">slash</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="sliders"></i> <span clasName="align-middle">sliders</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="smartphone"></i> <span clasName="align-middle">smartphone</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="speaker"></i> <span clasName="align-middle">speaker</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="square"></i> <span clasName="align-middle">square</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="star"></i> <span clasName="align-middle">star</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="stop-circle"></i> <span clasName="align-middle">stop-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="sun"></i> <span clasName="align-middle">sun</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="sunrise"></i> <span clasName="align-middle">sunrise</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="sunset"></i> <span clasName="align-middle">sunset</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="tablet"></i> <span clasName="align-middle">tablet</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="tag"></i> <span clasName="align-middle">tag</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="target"></i> <span clasName="align-middle">target</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="terminal"></i> <span clasName="align-middle">terminal</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="thermometer"></i> <span clasName="align-middle">thermometer</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="thumbs-down"></i> <span clasName="align-middle">thumbs-down</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="thumbs-up"></i> <span clasName="align-middle">thumbs-up</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="toggle-left"></i> <span clasName="align-middle">toggle-left</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="toggle-right"></i> <span clasName="align-middle">toggle-right</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="trash"></i> <span clasName="align-middle">trash</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="trash-2"></i> <span clasName="align-middle">trash-2</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="trending-down"></i> <span clasName="align-middle">trending-down</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="trending-up"></i> <span clasName="align-middle">trending-up</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="triangle"></i> <span clasName="align-middle">triangle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="truck"></i> <span clasName="align-middle">truck</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="tv"></i> <span clasName="align-middle">tv</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="twitter"></i> <span clasName="align-middle">twitter</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="type"></i> <span clasName="align-middle">type</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="umbrella"></i> <span clasName="align-middle">umbrella</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="underline"></i> <span clasName="align-middle">underline</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="unlock"></i> <span clasName="align-middle">unlock</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="upload"></i> <span clasName="align-middle">upload</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="upload-cloud"></i> <span clasName="align-middle">upload-cloud</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="user"></i> <span clasName="align-middle">user</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="user-check"></i> <span clasName="align-middle">user-check</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="user-minus"></i> <span clasName="align-middle">user-minus</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="user-plus"></i> <span clasName="align-middle">user-plus</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="user-x"></i> <span clasName="align-middle">user-x</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="users"></i> <span clasName="align-middle">users</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="video"></i> <span clasName="align-middle">video</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="video-off"></i> <span clasName="align-middle">video-off</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="voicemail"></i> <span clasName="align-middle">voicemail</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="volume"></i> <span clasName="align-middle">volume</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="volume-1"></i> <span clasName="align-middle">volume-1</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="volume-2"></i> <span clasName="align-middle">volume-2</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="volume-x"></i> <span clasName="align-middle">volume-x</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="watch"></i> <span clasName="align-middle">watch</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="wifi"></i> <span clasName="align-middle">wifi</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="wifi-off"></i> <span clasName="align-middle">wifi-off</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="wind"></i> <span clasName="align-middle">wind</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="x"></i> <span clasName="align-middle">x</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="x-circle"></i> <span clasName="align-middle">x-circle</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="x-square"></i> <span clasName="align-middle">x-square</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="zap"></i> <span clasName="align-middle">zap</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="zap-off"></i> <span clasName="align-middle">zap-off</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="zoom-in"></i> <span clasName="align-middle">zoom-in</span>
                                </div>
                                <div clasName="mb-2">
                                    <i clasName="align-middle me-2" data-feather="zoom-out"></i> <span clasName="align-middle">zoom-out</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>

        <footer clasName="footer">
            <div clasName="container-fluid">
                <div clasName="row text-muted">
                    <div clasName="col-6 text-start">
                        <p clasName="mb-0">
                            <a clasName="text-muted" href="https://adminkit.io/" target="_blank"><strong>AdminKit</strong></a> - <a clasName="text-muted" href="https://adminkit.io/" target="_blank"><strong>Bootstrap Admin Template</strong></a>								&copy;
                        </p>
                    </div>
                    <div clasName="col-6 text-end">
                        <ul clasName="list-inline">
                            <li clasName="list-inline-item">
                                <a clasName="text-muted" href="https://adminkit.io/" target="_blank">Support</a>
                            </li>
                            <li clasName="list-inline-item">
                                <a clasName="text-muted" href="https://adminkit.io/" target="_blank">Help Center</a>
                            </li>
                            <li clasName="list-inline-item">
                                <a clasName="text-muted" href="https://adminkit.io/" target="_blank">Privacy</a>
                            </li>
                            <li clasName="list-inline-item">
                                <a clasName="text-muted" href="https://adminkit.io/" target="_blank">Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div></div>
  )
}

export default Feature