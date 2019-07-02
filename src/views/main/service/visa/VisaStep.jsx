import React from "react";

class VisaStep extends React.Component {

    render() {
        return (
            <div className="service-filter p-3">
                <h4 className="title">
                <i className="fa fa-id-card pr-2"></i>
                Visa Step
                </h4>
                <div className="p-2">
                    <ul className="navigation-steps">
                        <li className="active">
                            <span>1. Personal Information</span>
                            <i className="fa fa-chevron-right"></i>
                        </li>
                        <li>
                            <span>2. Contact Information</span>
                            <i className="fa fa-chevron-right"></i>
                        </li>
                        <li>
                            <span>3. Passport Information</span>
                            <i className="fa fa-chevron-right"></i>
                        </li>
                        <li>
                            <span>4. Upload Information</span>
                            <i className="fa fa-chevron-right"></i>
                        </li>
                        <li>
                            <span>5. Trip Details</span>
                            <i className="fa fa-chevron-right"></i>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default VisaStep;
