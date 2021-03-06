import React from 'react';

import logo from '../../assets/img/brand/cst-logo-dark.png';

export const Navigation = () => {
    return (
        <header className="header-global">
            <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg headroom py-lg-3 px-lg-6 navbar-dark navbar-theme-primary">
                <div className="container">
                    <a className="navbar-brand @@logo_classes" href="/">
                        <img className="navbar-brand-dark common" src={logo} height="35" alt="Logo light" />
                        <img className="navbar-brand-light common" src={logo} height="35" alt="Logo dark" />
                    </a>
                    <div className="navbar-collapse collapse" id="navbar_global">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="/">
                                        <img src="@@path/assets/img/brand/dark.svg" height="35" alt="Logo Impact" />
                                    </a>
                                </div>
                                {/* <div className="col-6 collapse-close">
                                    <a href="#navbar_global" role="button" className="fas fa-times" data-toggle="collapse"
                                        data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                                        aria-label="Toggle navigation"></a>
                                </div> */}
                            </div>
                        </div>
                        <ul className="navbar-nav navbar-nav-hover justify-content-center">
                            <li className="nav-item">
                                <a href="/" className="nav-link">หน้าแรก</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="/#Service" className="nav-link">บริการของเรา</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="/product" className="nav-link">สินค้า</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="/about" className="nav-link">เกี่ยวกับเรา</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="/contact" className="nav-link">ติดต่อเรา</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}