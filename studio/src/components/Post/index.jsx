import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HeartBlack } from '../../assets/heartBlack.svg'
import { ReactComponent as Shop } from '../../assets/shop.svg'
import { ReactComponent as Wishlist } from '../../assets/wishlist.svg'
import LazyLoadImage from '../LazyLoadImage';
import VideoContainer from '../VideoContainer';
import './post.scss';

function Post({video = false}) {

    const imageDummy = "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2022/12/15/2f98dc81-f574-40d9-989f-d4f549cc48291671116151641-47.jpg"
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate("/profileDetail");
    }

    return (
        <div className="post">
            <div className="postHeader">
                <img src="https://img.freepik.com/free-photo/cheeky-stylish-handsome-queer-guy-denim-shirt-shopping-summer-vacation-picking-clothes-store-pointing-upper-left-corner-demonstrating-link-online-shop-yellow-background_1258-59654.jpg?w=1800&t=st=1671218341~exp=1671218941~hmac=0c24132994e3d55fbec11377565b26d7123d21b8be50023d4b4147074b55dbb0" alt="image" />
                <div className="postName" onClick={() => goToProfile()}>
                    <h4>
                        Nautica Home
                    </h4>
                    <p>
                        4 hours ago
                    </p>
                </div>
                <div className="bullet">
                    ⬤
                </div>
                <div className="follow">
                    Follow
                </div>
            </div>
            {
                video ? <div>
                        <VideoContainer />
                    </div> :
                <div className="postImage">
                    <LazyLoadImage />
                </div>
            }
           

            <div className="relatedContent">
                <div className="shopAll">
                    <div className="shopIcon">
                        <Shop />
                    </div>
                    <p>SHOP ALL</p>
                </div>

                {[1, 2, 3].map((val, index) => {
                    return (
                        <div className="relatedContainer" key={index}>
                            <img src={imageDummy} alt="postImage" />
                            <div className="relatedText">
                                <p className="title">Nautica</p>
                                <p className="priceMain">₹5,534 <span className="priceDiscount">₹12,298</span></p>
                                <span className="percentage">55% OFF</span>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="iconOut">
                <HeartBlack />
                <Wishlist />
            </div>

            <div className="description">
                <p>
                    If you're planning to renovate your bed then adding a new bedding set to your shopping list can be a good investment.
                </p>
                <div className="hashTags">
                    {
                        ['Nautica', 'Bianca', 'Biancahome', 'BedNBag'].map((val, index) => {
                            return <span key={index}>
                                #{val}
                            </span>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Post;
