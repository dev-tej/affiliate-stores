

import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as PlayBtn } from '../../assets/playBtn.svg'

import "./styles.scss";

export default function VideoContainer() {
    const imageDummy = "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2022/12/15/2f98dc81-f574-40d9-989f-d4f549cc48291671116151641-47.jpg"
   
    const navigate = useNavigate()

    const goToVideoDetails = () => {
        navigate("/videoDetails");
    }

    return (
        <div className="videoContainerMain">
            <div className="videoContainer">
                <img alt="image" src={imageDummy} />
                <idiv className="opacity" />
            </div>
            <div onClick={() => goToVideoDetails()} className="playBtn">
                <PlayBtn />
            </div>
        </div>

    );
}
