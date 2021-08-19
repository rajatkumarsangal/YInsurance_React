import React from 'react';


function RatingStrip() {
    return (
        <React.Fragment>
            <section className="rating-strip">
                <div className="container rrnopad">
                    <div className="col-sm-12 col-md-12 col-xs-12 nopad">
                        <div className="col-sm-4 col-md-4 col-xs-4 rating-strip-col bright">
                            <div className="valuestyle">
                                <span>3</span>
                                <span>Lacs+</span>
                                <span className="sp">Customers Compared Policies </span>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-xs-4 rating-strip-col bright">
                            <div className="valuestyle">
                                <span>10</span>
                                <span>k+</span>
                                <span className="sp">Happy Policy Holders</span>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-4 col-xs-4 rating-strip-col">
                            <div className="valuestyle">
                                <div className=" heartarea">
                                    <span>300</span>
                                    <span>+</span>
                                </div>
                                <span className="sp">Claim Issues Resolved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default RatingStrip;