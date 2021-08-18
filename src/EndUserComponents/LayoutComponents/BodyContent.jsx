import React from 'react';
import PolicyCards from './PolicyCards';
import InstantCallback from './InstantCallback';
import Testimonial from './Testimonial';

function BodyContent() {
    return (
        <React.Fragment>
            <PolicyCards/>
            <InstantCallback/>
            <Testimonial/>
        </React.Fragment>
    );

}

export default BodyContent;