import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostSecond from '../../../components/Post2';
import playVideoIcon from "../../../assets/play-icon.svg";
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";
import HeaderDark from '../../../components/HeaderDark';

function Homepage2() {
    const [homeData, setHomeData] = useState([])
    const [componentSort, setComponentSort] = useState([])

    const getHomeData = async () => {

        var config = {
            method: 'get',
            url: 'https://api.galleri5.co.in/servicer/galleri5/creator-zone/home',
            headers: {}
        };

        await axios(config)
            .then(function (response) {
                setHomeData(response.data)
                setComponentSort(response.data.map(val => val.component))
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        getHomeData();
    }, [])

    const heroBanners = homeData && homeData.length && homeData?.filter(item => item.name === "HERO_BANNER_CAROUSEL")[0] || {}
    const RoundedTopInfluencers = homeData && homeData.length && homeData?.filter(item => item.name === "ROUNDED_IMAGE_CAROUSEL")[0] || {}
    const liveStream = homeData && homeData.length && homeData?.filter(item => item.name === "MINI_IMAGE_CAROUSEL")[0] || {}
    const profile = homeData && homeData.length && homeData?.filter(item => item.name === "FEED_TIMELINE")[0] || {}
    const profileDetails = profile?.details?.meta[0]?.details

    const RenderBanner = () => {
        return (<div className='banner-slider-home'>
            <ReactOwlCarousel
                className='owl-theme'
                loop={true}
                autoplayTimeout={100000}
                autoplay={true}
                margin={10}
                nav
                items="1"
            >
                {heroBanners?.details?.meta?.map((item, index) => {
                    return (
                        <div className='carausal-image' key={index}>
                            <img src={item?.thumbnail} alt="postImage" />
                        </div>
                    )
                })}
            </ReactOwlCarousel>
        </div>
        )
    }

    const RenderTopInfluencer = () => {
        return (
            <div className='top-influence-sect'>
                <div className='container-width'>
                    <div className='heading-sect'>
                        <h2 className='title-h2-head'>{RoundedTopInfluencers?.details?.title || "Top Influencers"}</h2>
                    </div>
                    <div className='influice--wrap-items'>
                        <ReactOwlCarousel
                            className='owl-theme top-slide-product'
                            loop={true}
                            autoplayTimeout={10000}
                            autoplay={true}
                            margin={10}
                            nav={false}
                            dots={false}
                            items="4"
                        >
                            {RoundedTopInfluencers?.details?.meta?.map((item, index) => {
                                return (
                                    <div class='item' key={index}>
                                        <div className='item--topcategry text-center'>
                                            <div className='imgproduct--gm'><img src={item?.thumbnail} alt="" /></div>
                                            <h4 className='heading-gm-wigt'>{item?.name || ''}</h4>
                                        </div>
                                    </div>
                                )
                            })}
                        </ReactOwlCarousel>
                    </div>
                </div>
            </div>

        )
    }

    const RenderLiveStream = () => {
        return (
            <div className='live-stream-wap'>
                <div className='container-width'>
                    <div className='heading-sect stream-heading'>
                        <h2 className='title-h2-head'><img src={playVideoIcon} alt='Play icon' /> Live Streams</h2>
                        <span className='view-allstream'><button type='button' className='btn-view-all'>View All</button></span>
                    </div>
                    <div className='stream-sec-wap'>
                        <div className='row-stream-grid-custom'>
                            {
                                liveStream?.details?.meta.map((val, index) => {
                                    return (
                                        <div key={index} className='column-wig--stmweb'>
                                            <div className='stm-boxwidgets'>
                                                <div className='img-product--mt'><img src={val?.thumbnail} alt="web" /></div>
                                                <div className='disc-shortweb-stm'>
                                                    <h3 className='headstm--wm'>{val.description || ''}</h3>
                                                    <span className='name-usr-titl'>{val.name || ''}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const RenderPost = () => {
        return (
            <div className='postwap--sectbody'>
                <div className='container-width'>
                    <>
                        <PostSecond profileDetails={profileDetails} onProfileClick={'/profileDetail?theme=dark'} />
                    </>
                </div>
            </div>

        )
    }

    const renderSortedArray = () => {
        let arr = []
        componentSort.length && componentSort.forEach(val => {
            if(val === 'HERO_BANNER_CAROUSEL'){
                arr.push(<RenderBanner />)
            }else if(val === 'ROUNDED_IMAGE_CAROUSEL'){
                arr.push(<RenderTopInfluencer />)
            }else if(val === 'MINI_IMAGE_CAROUSEL'){
                arr.push(<RenderLiveStream />)
            }else if(val === 'FEED_TIMELINE'){
                arr.push(<RenderPost />)
            }
        })
        return arr
    }

    return (
        <div className='dark-theme'>
            <HeaderDark renderRightButton={true} />
            {renderSortedArray()}
        </div>
    )
}
export default Homepage2;