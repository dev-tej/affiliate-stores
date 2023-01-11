import React, { useState } from 'react';
import Button from '../../../components/Button';
import HeaderSecond from '../../../components/HeaderDark';
import PostSecond from '../../../components/Post2';
import productImg1 from "../../../assets/product-image-collect.jpg";
import './styles.scss'

function ProfileSecond() {
  const [postSate, setPostState] = useState(1);
  const imageDummy = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

  let handleClick = (val) =>{
    setPostState(val)
  }

  return (
    <div className='dark-theme'>
      <div className="webprofile--warpper">
        <HeaderSecond renderRightButton={false} />
        <div className='top-profile-web'>
          <div className='container-width'>
            <div className='profile-flexusr'>
              <div className='left-usr--img'>
                <img src={imageDummy} className="mainImage" alt="image" />
              </div>
              <div className='profile--infocontent'>
                <div className='header-flexwidget'>
                  <div className='headerwap--flex-sect'>
                    <h3 className='prf--titleweb'>Ruhi Saikia</h3>
                    <p className='eml-prf-web'>@Odette</p>
                  </div>
                  <div className='view-follow-flex'><Button type="button" className="btn btn-follow">FOLLOW</Button></div>
                </div>
                <div className='listitem--follow-web'>
                  <ul className='view--web-follow'>
                    <li className='view-post--widgt'>22 Followers</li>
                    <li className='view-post--widgt'>7 Posts</li>
                    <li className='view-post--widgt'>5 Livestreams</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='profile-disc'>
              <p>I create fashion content and express myself through my dressing style. I create fashion content and express myself through my dressing style</p>
            </div>
          </div>
        </div>


        <div className='postwap--sectbody'>
          <div className='container-width'>
            <div className="tabsticky--header">
              <ul className="menutab--navwap">
                {/* <li className="active tabmenu-items">
                  <button className='btn btn-menu-tab'>Livestreams</button>
                </li> */}
                <li className={postSate == 1 ? "tabmenu-items active" : "tabmenu-items"}>
                  <button className='btn btn-menu-tab' onClick={() => handleClick("1")}>Post</button>
                </li>
                <li className={postSate == 2 ? "tabmenu-items active" : "tabmenu-items"}>
                  <button className='btn btn-menu-tab' onClick={() => handleClick("2")}>Collections</button>
                </li>
              </ul>
            </div>
            {
              postSate == "1" ? 
              <>
                <PostSecond />
                <PostSecond />
                <PostSecond />
                <PostSecond />
                <PostSecond />
                <PostSecond />
              </>
            :
            <>
              <div className='collection-productwap'>
                <div className='collectrow--webmulti'>
                  <h2 className='prodct-titlehead'>Beauty Products</h2>
                  <div className='row product-wap--flex-collection'>                  
                    <div className='col-6 collection-col-wap'>
                      <div className='product-boxwap-collect'>
                        <div className='product-imgcollection'>
                          <img src={productImg1} />
                          <div className='collect--discweb-titles'>
                            <h4 className='head-product-collect'>Mast and Harbour</h4>
                            <p className='product--disc-short'>Mast and Harbour and Tan Brown Solid Platform Heels</p>
                            <div className='product--footerweb'>
                              <span className='price-head-collect'>$567</span>
                              <span className='button-purchase'><button className='btn btn-buynow'>Buy Now</button></span>
                            </div>
                          </div>
                        </div>                      
                      </div>
                    </div>
                    <div className='col-6 collection-col-wap'>
                      <div className='product-boxwap-collect'>
                        <div className='product-imgcollection'>
                          <img src={productImg1} />
                          <div className='collect--discweb-titles'>
                            <h4 className='head-product-collect'>Mast and Harbour</h4>
                            <p className='product--disc-short'>Mast and Harbour and Tan Brown Solid Platform Heels</p>
                            <div className='product--footerweb'>
                              <span className='price-head-collect'>$567</span>
                              <span className='button-purchase'><button className='btn btn-buynow'>Buy Now</button></span>
                            </div>
                          </div>
                        </div>                      
                      </div>
                    </div>
                    <div className='col-6 collection-col-wap'>
                      <div className='product-boxwap-collect'>
                        <div className='product-imgcollection'>
                          <img src={productImg1} />
                          <div className='collect--discweb-titles'>
                            <h4 className='head-product-collect'>Mast and Harbour</h4>
                            <p className='product--disc-short'>Mast and Harbour and Tan Brown Solid Platform Heels</p>
                            <div className='product--footerweb'>
                              <span className='price-head-collect'>$567</span>
                              <span className='button-purchase'><button className='btn btn-buynow'>Buy Now</button></span>
                            </div>
                          </div>
                        </div>                      
                      </div>
                    </div>
                    <div className='col-6 collection-col-wap'>
                      <div className='product-boxwap-collect'>
                        <div className='product-imgcollection'>
                          <img src={productImg1} />
                          <div className='collect--discweb-titles'>
                            <h4 className='head-product-collect'>Mast and Harbour</h4>
                            <p className='product--disc-short'>Mast and Harbour and Tan Brown Solid Platform Heels</p>
                            <div className='product--footerweb'>
                              <span className='price-head-collect'>$567</span>
                              <span className='button-purchase'><button className='btn btn-buynow'>Buy Now</button></span>
                            </div>
                          </div>
                        </div>                      
                      </div>
                    </div>                  
                  </div>
                </div>
              </div> 
            </>
            }
        </div>
      </div>
      </div>
    </div>
  );
}

export default ProfileSecond;