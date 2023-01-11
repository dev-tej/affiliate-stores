import React from 'react';
import Button from '../Button';
import './styles.scss';

function Recommended() {
    return (
        <div className="recommendedContainer">

            <div className="heading">
                <p>Recommended for you</p>
                <p className="colored">View All</p>
            </div>

            <div className="scrollableContainer">
                {
                    [0, 1, 2, 3, 4, 5, 6, 7].map((val, index) => {
                        return (
                            <div className="scrollableContent">
                                <img src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_120,c_limit,fl_progressive/assets/images/2020/4/3/e9d130e1-68fc-496e-a3dc-980aca093ccc1585935271650-H-M_Logo_85x85.png" alt="image"/>
                                <h4>H&M</h4>
                                <p>Offering the latest styles and...</p>
                                <Button className="button" ouline={true}>+ FOLLOW</Button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
}

export default Recommended;
