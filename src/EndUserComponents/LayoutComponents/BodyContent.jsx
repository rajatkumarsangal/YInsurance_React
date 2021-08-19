import React from 'react';
import PolicyCards from './PolicyCards';
import InstantCallback from './InstantCallback';
import Testimonial from './Testimonial';
import OurInsurancePartner from './OurInsurancePartner';
import RatingStrip from './RatingStrip';

function BodyContent() {
    return (
        <React.Fragment>
            <PolicyCards/>
            <RatingStrip/>
            <OurInsurancePartner/>
            <InstantCallback/>
            
            <Testimonial/>
        </React.Fragment>
    );

}

export default BodyContent;