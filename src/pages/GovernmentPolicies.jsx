import React from 'react';
import './gov.css';

const GovernmentPolicies = () => {
    return (
        <div>
                <div className="content">
                    <div className="item">
                        <a href="https://www.unicef.org/india">
                            <img 
                                src="https://www.itu.int/net4/wsis/ungis/Content/img/logos/uniform/unicef.png" 
                                alt="UNICEF" 
                            />
                        </a>
                    </div>
                    <div className="item">
                        <img 
                            src="https://pbs.twimg.com/media/FwQHx7eWAAATvku.jpg" 
                            alt="Child Protection" 
                        />
                    </div>
                    <div className="item">
                        <a href="https://www.india.gov.in/national-policy-children">
                            <img 
                                src="https://yt3.googleusercontent.com/lyqV07QnyvV8w2BV_ZVtIE0VYC4nxnAU7VGbTLGjv0VPriKQqFfeZzNRLskr4ddPfD4eVHGiGRU=s900-c-k-c0x00ffffff-no-rj" 
                                alt="National Policy for Children" 
                            />
                        </a>
                    </div>
                </div>
            

            <footer>
                <p>&copy; 2023 Rights Explorer</p>
            </footer>
        </div>
    );
}

export default GovernmentPolicies;
