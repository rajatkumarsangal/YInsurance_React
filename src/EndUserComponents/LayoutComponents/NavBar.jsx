import React from 'react';

function NavBar(){
    return(
<React.Fragment>
<header>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 no_padding">
                <a href="http://www.srstechsolution.com" className="">
                    {/* <img className="logo img-responsive" src="/UIMaster/MasterImages/master/logo.png" alt="Logo Image"/>*/}
                    <h1>Yuva Insurance</h1></a> 
            </div>
            {/* <!-- .col-md-3 --> */}
            <div className="col-md-9 no_padding">
                <ul className="top_section">
                    <li><a href="">
                        <span id="ctl00_Header1_lblManageMyPolicy">Manage My Policies</span></a></li>
                    
                    <li><a href="" data-toggle="modal" data-target="#myModal">
                        <span id="ctl00_Header1_lblLoginIn">Log In</span></a></li>
                </ul>
                {/* <!-- .top_section --> */}
                <nav className="navigation">
                    <ul>
                        <li><a href="">
                            <span id="ctl00_Header1_lblmasterHome">Home</span></a></li>
                        <li><a href="">
                            <span id="ctl00_Header1_lblAboutUs">About Us</span></a></li>
                        <li><a href="">
                            <span id="ctl00_Header1_lblProduct">Products</span></a></li>
                        <li><a href="">
                            <span id="ctl00_Header1_lblContactUs">Contact Us</span></a></li>
                        
                    </ul>
                    {/* <!-- ul --> */}
                </nav>
                {/* <!-- nav --> */}
                <div className="nav-icon">
                    <span></span><span></span><span></span><span></span>
                </div>
                {/* <!-- .nav-icon --> */}
                <div className="pol-icon">
                    <p>
                        Policies<i className="fa fa-plus"></i></p>
                </div>
                {/* <!-- .pol-icon --> */}
                <div className="lang-icon">
                    <p>
                        Lng<i className="fa fa-plus"></i></p>
                </div>
                {/* <!-- .lang-icon --> */}
            </div>
            {/* <!-- .col-md-9 --> */}
        </div>
        {/* <!-- .row --> */}
    </div>
    {/* <!-- .container-fluid --> */}
</header>
</React.Fragment>

    );

}

export default NavBar;