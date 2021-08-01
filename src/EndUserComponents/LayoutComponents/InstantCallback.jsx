import React from 'react';

function InstantCallback(){
    return(
<React.Fragment>
<section className="instant_call_back scroll_hide" id="instant_callback">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 col-lg-3 col-lg-offset-2 hidden-lg hidden-md">
                        <div className="main_title">
                            <h1 className="color_sgreen text-uppercase fontstyle8 main_heading_right">
                                Instant
                                <div className="clearfix">
                                </div>
                                <span className="color_yellow fontstyle4">
                                    <span id="ctl00_lblCallback">Callback</span>
                                </span>
                            </h1>
                            <div className="clearfix">
                            </div>
                            <hr className="hr_sgreen"/>
                        </div>
                        {/* <!-- .main_title --> */}
                    </div>
                    <div className="col-md-6 col-md-offset-1 col-lg-4 col-lg-offset-2">
                        <h3 className="color_yellow">
                            FOR SUITABLE
                            <br/>
                            <span id="ctl00_lblForSuitable">INSURANCE PRODUCTS</span>
                        </h3>
                        <hr className="hr_yellow"/>
                        <div className="clearfix">
                        </div>
                        <h3 className="color_sgreen">
                            <strong>
                                <span id="ctl00_lblShareDetails"> SHARE YOUR DETAILS</span>
                            </strong>,
                            <span id="ctl00_lblShareDetails1">FOR </span><br/>
                            <span id="ctl00_lblShareDetails2">AN INSTANT CALLBACK</span>
                        </h3>
                        <div className="callback_container">
                            <div className="btn-group">
                                <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img alt="flag" src="/images/MasterImages/HomeMaster/common/flags/flag14.png"/>
                                </button>
                                <i className="fa fa-angle-down padding_top_md margin_left_minus"></i>
                                <div className="clearfix">
                                </div>
                                
                            </div>
                            <input type="text" disabled="disabled" value="+91" className="width50px disabled"/>
                            <input name="ctl00$txtMobileNumber" type="text" maxlength="12" id="ctl00_txtMobileNumber"/>
                            <input type="hidden" name="ctl00$txtMobileNumberWatermark_ClientState" id="ctl00_txtMobileNumberWatermark_ClientState"/>
                            
                            <div className="clearfix">
                            </div>
                        </div>
                        {/* <!-- .callback_container --> */}
                        <a href="#" id="amobno" className="" data-toggle="modal" data-target="#thank_you_callback">
                            <i className="arrow_icn hide"></i></a><a id="ctl00_A1" data-toggle="modal" onclick="return ValidateMobileNoFunction();">
                                <i className="arrow_icn"></i></a>
                        
                        <div className="clearfix">
                        </div>
                        <div id="divMobileNoErrBox" style={{display: 'none', 'vertical-align': 'top'}}>
                            <span id="ctl00_lblMobileNoErrMsg">Enter Mobile No !!</span>
                        </div>
                        <div className="row">
                            <div className="col-md-6 color_yellow col-md-pull-2 col-sm-6 col-xs-6">
                                <i className="email_icn"></i>
                                <div className="clearfix">
                                </div>
                                <a href="info@insuringindia.com" target="_top">info@insuringindia.com</a></div>
                            <div className="col-md-6 color_yellow col-md-push-2 col-sm-6 col-xs-6">
                                <i className="phone_icn"></i>
                                <div className="clearfix">
                                </div>
                                011-395-85250</div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-3 col-lg-offset-2 hidden-xs hidden-sm">
                        <div className="main_title">
                            <h1 className="color_sgreen text-uppercase fontstyle8 main_heading_right">
                                Instant
                                <div className="clearfix">
                                </div>
                                <span className="color_yellow fontstyle4">
                                    <span id="ctl00_lblCallback1">Callback</span></span></h1>
                            <div className="clearfix">
                            </div>
                            <hr className="hr_sgreen"/>
                        </div>
                        {/* <!-- .main_title --> */}
                    </div>
                </div>
            </div>
            {/* <!-- .container-fluid --> */}
        </section>
</React.Fragment>

    );
}

export default InstantCallback;