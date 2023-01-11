

import React, { useState, useEffect } from "react";
import "./styles.scss";

export default function VideoDetails() {

    const [showText, setShowText] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowText(false)
        }, 4000);
    },[])

    return (
        <div className={`videoDetails ${showText && 'shadow'}`}>

           <div className={`textMain ${showText && 'show'}`}>
                <h3>
                    Myntra studio
                </h3>
                <p>
                If you're planning to renovate your bed then adding set to your can be a good investment.
                </p>
            </div> 

            <video id={'videoRef'} controls loop={true} autoplay={true} disablePictureInPicture={true} controlsList="nodownload noremoteplayback noplaybackrate">
                <source 
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                    type="video/mp4" />
                        Your browser does not support the video tag.
            </video>
        </div>
    );
}
