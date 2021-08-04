import React from 'react';

function Header(){
return(
<React.Fragment>
<header id="scrolling-header" className="scrolling-header abc home scrolling-header-hide">
            <div className="scrolling-header-perspective">
                <div className="scrolling-header-front">
                    <div className="container-fluid">
                        <nav className="navbar navbar-default navbar_scroll">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand no_padding" href="#">
                                        {/* <img src="/UIMaster/MasterImages/master/logo.png" className="img-responsive" alt="Logo"/> */}
                                        {/* <h2>Yuva Insurance</h2> */}
                                        </a>
                                </div>
                                <div className="collapse navbar-collapse" id="navbar-collapse-1">
                                    <div className="navbar_custom">
                                        <ul className="nav navbar-nav">
                                            <li className="dropdown">
                                                <a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" data-delay="10000" data-close-others="false" aria-haspopup="true" aria-expanded="false">
                                                <span id="ctl00_lblLifeInsurance">Life Insurance</span>
                                                {/* <!-- <span className="caret"></span> --> */}
                                            </a>
                                                <ul className="dropdown-menu life_container">
                                                    <span className="top_arrow"><span></span></span>
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-12 no_padding">
                                                                <div className="col-md-4 col-sm-4 col-xs-4 col-lg-4 link_container link_container_first_row">
                                                                    <li className="title text-uppercase"><a href="../../life-insurance/TermLife/online-term-insurance-home.aspx" className="color_term image_link"><span>
                                                                            <span id="ctl00_lblTermPlan">Term Plan</span>
                                                                        </span></a></li>
                                                                </div>
                                                                <div className="col-md-4 col-sm-4 col-xs-6 col-lg-4 link_container link_container_second_row">
                                                                    <li className="title text-uppercase "><a href="../../life-insurance/InvestmentLife/online-investment-insurance-home.aspx" className="color_investment image_link"><span>
                                                                            <span id="ctl00_lblInvestmentPlan">Investment Plan</span></span></a></li>
                                                                    <li><a href="../../life-insurance/Child/online-child-insurance-home.aspx" className="image_link">
                                                                        <span>
                                                                            <span id="ctl00_lblChildPlan">Child Plans</span></span></a>
                                                                    </li>
                                                                    <li><a href="../../life-insurance/Pension/online-retirement-insurance-home.aspx" className="image_link"><span>
                                                                            <span id="ctl00_lblRetirementPlan">Retirement Plan</span></span></a>
                                                                    </li>
                                                                    <li><a href="#" className="image_link"><span>
                                                                        <span id="ctl00_lblWealthPlan">Wealth Creation Plan</span></span></a>
                                                                    </li>
                                                                    <li><a href="#" className="image_link"><span>
                                                                        <span id="ctl00_lblUtiUlip">UTI ulip plans</span></span></a>
                                                                    </li>
                                                                </div>
                                                                <div className="col-md-4 col-sm-4 col-xs-6 col-lg-4 link_container link_container_third_row">
                                                                    <li className="title text-uppercase "><a href="../../life-insurance/CancerCover/online-cancer-insurance-home.aspx" className="color_cancer image_link"><span>
                                                                            <span id="ctl00_lblCancerPlan">Cancer Plan</span></span></a></li>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 no_padding_right hidden-xs hidden-sm hidden-md">
                                                                {/* <div className="dynamic_image_container" onClick="return RedirecttoPages(1);"> */}
                                                                <div className="dynamic_image_container">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- End row --> */}
                                                    </div>
                                                   {/*  <!-- End container --> */}
                                                </ul>
                                                {/* <!-- dropdown-menu --> */}
                                            </li>
                                            <li className="dropdown"><a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" data-delay="10000" data-close-others="false" aria-haspopup="true" aria-expanded="false">
                                                <span id="ctl00_lblHealthInsurance">Health Insurance</span>
                                               {/*  <!-- <span className="caret"></span> --> */}
                                            </a>
                                                <ul className="dropdown-menu health_container">
                                                    <span className="top_arrow"><span></span></span>
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-12 no_padding">
                                                                <div className="col-md-4 col-sm-4 col-xs-6 col-lg-4 link_container link_container_first_row">
                                                                    <li className="title text-uppercase"><a href="../../general-insurance/health/health-home.aspx" className="color_term image_link"><span>
                                                                            <span id="ctl00_lblHealthPlan">Health Plan</span></span></a></li>
                                                                    <li><a href="../../general-insurance/health/health-home.aspx" className="image_link"><span>
                                                                        <span id="ctl00_lblFamilyFlotter">Family Flotter Plan</span></span></a>
                                                                    </li>
                                                                    <li><a href="#" className="image_link"><span>
                                                                        <span id="ctl00_lblSeniorCitizen">Senior Citizen Plan</span></span></a>
                                                                    </li>
                                                                    <li><a href="#" className="image_link"><span>
                                                                        <span id="ctl00_lblTopUpInsurance">Top-up Plan</span></span></a>
                                                                    </li>
                                                                </div>
                                                                <div className="col-md-4 col-sm-4 col-xs-6 col-lg-4 link_container link_container_second_row">
                                                                    <li className="title text-uppercase "><a href="../../general-insurance/critical/critical-home.aspx" className="color_critical"><span>
                                                                            <span id="ctl00_lblCriticalillness">Critical illness Plan</span>
                                                                        </span></a></li>
                                                                </div>
                                                                <div className="col-md-4 col-sm-4 col-xs-6 col-lg-4 link_container link_container_third_row">
                                                                    <li className="title text-uppercase "><a href="../../general-insurance/DengueShield/critical_dengueshield_home.aspx" className="color_dengueshield image_link"><span>
                                                                            <span id="ctl00_lblDengueShieldPlan">Dengue Shield Plan</span>
                                                                        </span></a></li>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 no_padding_right hidden-xs hidden-sm hidden-md">
                                                                {/* <div className="dynamic_image_container" onClick="return RedirecttoPages(2);"> */}
                                                                <div className="dynamic_image_container">
                                                                    &nbsp;</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- End row --> */}
                                                    </div>
                                                    {/* <!-- End container --> */}
                                                </ul>
                                                {/* <!-- dropdown-menu --> */}
                                            </li>
                                            <li className="dropdown"><a href="" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" data-delay="10000" data-close-others="false" aria-haspopup="true" aria-expanded="false">
                                                <span id="ctl00_lblMotorInsurance">Motor Insurance</span>
                                                {/* <!-- <span className="caret"></span> --> */}
                                            </a>
                                                <ul className="dropdown-menu motor_container">
                                                    <span className="top_arrow"><span></span></span>
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-12 no_padding">
                                                                <div className="col-md-5 col-sm-4 col-xs-6 col-lg-4 link_container link_container_first_row">
                                                                    <li className="title text-uppercase"><a href="../../general-insurance/motor/online-motor-home.aspx" className="color_motor image_link"><span>
                                                                            <span id="ctl00_lblPC">Four Wheeler Plan</span></span></a></li>
                                                                    <li><a href="../../general-insurance/motor/online-motor-insurance-book-policy.aspx" className="image_link"><span>
                                                                            <span id="ctl00_lblPcNew">New Policy</span></span></a>
                                                                    </li>
                                                                    <li><a href="../../general-insurance/motor/online-motor-insurance-renewal-policy.aspx" className="image_link"><span>
                                                                            <span id="ctl00_lblPcRenew">Renew Policy</span></span></a>
                                                                    </li>
                                                                    <li><a href="../../general-insurance/motor/online-motor-insurance-renewal-expired-policy-home.aspx" className="image_link"><span>
                                                                            <span id="ctl00_lblPcExpired">Expired Policy</span></span></a>
                                                                    </li>
                                                                </div>
                                                                <div className="col-md-5 col-sm-4 col-xs-6 col-lg-4 link_container link_container_second_row">
                                                                    <li className="title text-uppercase "><a href="../../general-insurance/twoWheeler/online-twowheeler-home.aspx" className="color_two_wheeler image_link"><span>
                                                                            <span id="ctl00_lblTw">Two Wheeler</span></span></a></li>
                                                                    <li><a href="../../general-insurance/twoWheeler/online-twowheeler-book-policy.aspx" className="image_link"><span>
                                                                            <span id="ctl00_lblTwNew">New Policy</span></span></a>
                                                                    </li>
                                                                    <li><a href="../../general-insurance/twoWheeler/online-twowheeler-renewal-policy.aspx" className="image_link"><span>
                                                                            <span id="ctl00_lblTwReNew">Renew Policy</span></span></a>
                                                                    </li>
                                                                    <li><a href="../../general-insurance/twoWheeler/online-twowheeler-insurance-renewal-expired-policy-home.aspx" className="image_link"><span>
                                                                            <span id="ctl00_lblTwExpired">Expired Policy</span></span></a>
                                                                    </li>
                                                                </div>
                                                                <div className="col-md-5 col-sm-4 col-xs-6 col-lg-4 link_container link_container_third_row">
                                                                    <li className="title text-uppercase "><a href="#" className="color_cancer image_link"><span>
                                                                        <span id="ctl00_lblLiability">Liability</span></span></a></li>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 no_padding_right hidden-xs hidden-sm hidden-md">
                                                                {/* <div className="dynamic_image_container" onClick="return RedirecttoPages(3);"> */}
                                                                <div className="dynamic_image_container">
                                                                    &nbsp;</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- End row --> */}
                                                    </div>
                                                    {/* <!-- End container --> */}
                                                </ul>
                                                {/* <!-- dropdown-menu --> */}
                                            </li>
                                            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" data-delay="10000" data-close-others="false" aria-haspopup="true" aria-expanded="false">
                                                <span id="ctl00_lblPetInsurance">Pet Insurance</span>
                                                {/* <!-- <span className="caret"></span> --> */}
                                            </a>
                                                <ul className="dropdown-menu pet_container">
                                                    <span className="top_arrow"><span></span></span>
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-md-12 col-lg-7 link_container link_container_first_row">
                                                                <li className="title text-uppercase"><a href="../../pet-insurance/online-pet-insurance-home.aspx" className="color_pet image_link"><span>
                                                                        <span id="ctl00_lblPetInsurancePlan">Pet Insurance Plan</span></span></a></li>
                                                            </div>
                                                            <div className="col-lg-5 no_padding_right hidden-xs hidden-sm hidden-md">
                                                                {/* <div className="dynamic_image_container" onClick="return RedirecttoPages(4);"> */}
                                                                <div className="dynamic_image_container">
                                                                    &nbsp;</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- End row --> */}
                                                    </div>
                                                   {/*  <!-- End container --> */}
                                                </ul>
                                                {/* <!-- dropdown-menu --> */}
                                            </li>
                                            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" data-delay="10000" data-close-others="false" aria-haspopup="true" aria-expanded="false">
                                                <span id="ctl00_lblOtherInsurance">Others</span>
                                                {/* <!-- <span className="caret"></span> --> */}
                                            </a>
                                                <ul className="dropdown-menu others_container">
                                                    <span className="top_arrow"><span></span></span>
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-12 no_padding">
                                                                <div className="col-md-4 col-sm-4 col-xs-6 col-lg-4 link_container link_container_first_row">
                                                                    <li className="title text-uppercase"><a href="../../general-insurance/travel/travel-home.aspx" className="color_travel image_link"><span>
                                                                            <span id="ctl00_lblTravelPlan">Travel Insurance</span>
                                                                        </span></a></li>
                                                                    <li className="title text-uppercase"><a href="#" className="image_link"><span>
                                                                        <span id="ctl00_lblBusinessInsurance">Business Insurance</span>
                                                                    </span></a></li>
                                                                </div>
                                                                <div className="col-md-4 col-sm-4 col-xs-6 col-lg-4 link_container link_container_second_row">
                                                                    <li className="title text-uppercase "><a href="#"><span>
                                                                        <span id="ctl00_lblFineArt">Fine Art Plan</span></span></a></li>
                                                                    <li className="title text-uppercase "><a href="#"><span>
                                                                        <span id="ctl00_lblPersonalAccident">Personal Accident Plan</span></span></a>
                                                                    </li>
                                                                    <li className="title text-uppercase"><a href="../../rural-insurance/Rural-insurance-home.aspx?ProductId=weather">
                                                                        <span>
                                                                            <span id="ctl00_lblWeatherInsurance">Weather Insurance</span>
                                                                        </span></a></li>
                                                                    <li className="title text-uppercase"><a href="../../rural-insurance/Rural-insurance-home.aspx?ProductId=rainfall">
                                                                        <span>
                                                                            <span id="ctl00_lblRainfallInsurance">Rainfall Insurance</span>
                                                                        </span></a></li>
                                                                    <li className="title text-uppercase"><a href="../../rural-insurance/Rural-insurance-home.aspx?ProductId=crop">
                                                                        <span>
                                                                            <span id="ctl00_lblCropInsurance">Crop Insurance</span>
                                                                        </span></a></li>
                                                                </div>
                                                                <div className="col-md-4 col-sm-4 col-xs-6 col-lg-4 link_container link_container_third_row">
                                                                    <li className="title text-uppercase "><a href="../../rural-insurance/Rural-insurance-home.aspx?ProductId=plantation">
                                                                        <span>
                                                                            <span id="ctl00_lblPlantationInsurance">Plantation Insurance</span>
                                                                        </span></a></li>
                                                                    <li className="title text-uppercase "><a href="../../rural-insurance/farmer-package-policy-home.aspx">
                                                                        <span>
                                                                            <span id="ctl00_lblFarmerInsurance">Farmer insurance</span>
                                                                        </span></a></li>
                                                                    <li className="title text-uppercase "><a href="../../rural-insurance/pumpset-insurance-home.aspx">
                                                                        <span>
                                                                            <span id="ctl00_lblPumpsetInsurance">Pumpset</span>
                                                                        </span></a></li>
                                                                    <li className="title text-uppercase "><a href="../../rural-insurance/cattle-insurance-home.aspx">
                                                                        <span>
                                                                            <span id="ctl00_lblCattleInsurance">Cattle Insurance</span>
                                                                        </span></a></li>
                                                                    <li className="title text-uppercase "><a href="#"><span>
                                                                        <span id="ctl00_lblHomeInsurance">Home Insurance</span>
                                                                    </span></a></li>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 no_padding_right hidden-xs hidden-sm hidden-md">
                                                                {/* <div className="dynamic_image_container" onClick="return RedirecttoPages(5);"> */}
                                                                <div className="dynamic_image_container">
                                                                    &nbsp;</div>
                                                            </div>
                                                        </div>
                                                       {/*  <!-- End row --> */}
                                                    </div>
                                                    {/* <!-- End container --> */}
                                                </ul>
                                                {/* <!-- dropdown-menu --> */}
                                            </li>
                                            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" data-delay="10000" data-close-others="false" aria-haspopup="true" aria-expanded="false">
                                                <span id="ctl00_lblSupport">Support</span>
                                                {/* <!-- <span className="caret"></span> --> */}
                                            </a>
                                                <ul className="dropdown-menu support_container">
                                                    <span className="top_arrow"><span></span></span>
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-md-3 col-sm-3 col-xs-6 col-lg-2 link_container link_container_first_row">
                                                                <li className="title text-uppercase">
                                                                    <a href="" className="">
                                                                    <span>
                                                                    <span id="ctl00_lblContactUs">Contact Us</span>
                                                                    <br/>
                                                                    <span id="ctl00_lblInfoMail">[mail us at]</span>
                                                                    <br/>
                                                                    info@insuringindia.com
                                                                    <br/>
                                                                    <span id="ctl00_lblInfoMobile">Call Us</span>
                                                                    <br/>
                                                                    011-395-85250
                                                                    </span></a></li>
                                                            </div>
                                                            <div className="col-md-3 col-sm-3 col-xs-6 col-lg-3 link_container link_container_second_row">
                                                                <li className="title text-uppercase "><a href="../../global/claims-assistance.aspx"><span>
                                                                    <span id="ctl00_lblClaimAssistance">Claim Assistance</span>
                                                                </span></a></li>
                                                            </div>
                                                            <div className="col-md-3 col-sm-3 col-xs-6 col-lg-3 link_container link_container_third_row">
                                                                <li className="title text-uppercase "><a href="../../canHelpTemplate.aspx" className=""><span>
                                                                    <span id="ctl00_lblAskQuestion">Ask a Question</span></span></a></li>
                                                            </div>
                                                            <div className="col-md-3 col-sm-3 col-xs-6 col-lg-3 link_container link_container_third_row">
                                                                <li className="title text-uppercase "><a href="#" className=""><span>
                                                                    <span id="ctl00_lblRegisterComplaint">Register a Complaint</span></span></a></li>
                                                            </div>
                                                            
                                                        </div>
                                                       {/*  <!-- End row --> */}
                                                    </div>
                                                    {/* <!-- End container --> */}
                                                </ul>
                                            </li>
                                            {/* <li className="padding_top_xs"><a href="#"><i className="fa fa-search"></i></a></li> */}
                                        </ul>
                                        {/* <!-- navbar-nav --> */}
                                    </div>
                                </div>
                                {/* <!-- /.navbar-collapse --> */}
                            </div>
                            {/* <!-- /.container-fluid --> */}
                        </nav></div>
                </div>
            </div>
        </header></React.Fragment>

);
}
export default Header;