import React from 'react';
import './scrollableBannerImages.scss';

function ScrollableBannerImages() {
    return (
        <div className="bannerScroller">
            {[1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2,].map((val, index) => {
                return (
                    <div key={index} className="bannerImageContainer">
                        <img src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_240,c_limit,fl_progressive/assets/images/2022/12/16/9454931a-f06a-4118-8210-06e89d7324f01671193581271-17DEC22-SB-Influencer-store-Women-2.jpg" alt="image" />
                    </div>
                )
            })}
        </div>
    );
}

export default ScrollableBannerImages;
