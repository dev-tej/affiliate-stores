import React, { useState } from 'react';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import LoginBottomModal from '../../../components/LoginBottomModal';
import Post from '../../../components/Post';
import './styles.scss'

function ProfileDetails() {
  const [postSate, setPostState] = useState(0);
  const imageDummy = "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2022/12/15/2f98dc81-f574-40d9-989f-d4f549cc48291671116151641-47.jpg"

  return (
    <div className="profileDetails">
      <Header renderRightButton={false} />
      <div className="profileImageOut">
        <img src={imageDummy} className="mainImage" alt="image" />
        <div className="profileConatiner">
          <div className="paddingCon">
            <div className="personTitleOut">
              <div>
                <h3>
                  Zinklondon
                </h3>
                <span>
                  @Zinklondon
                </span>
              </div>
              <Button>+ FOLLOW</Button>
            </div>
            <div className="profileDes">
              <div className="followDetails">
                <span>22</span> <p>Followers</p> <div className="bullet">⬤</div> <span>7</span> <p>Posts</p>
              </div>
              <p>
                Zink London is a leading fashion brand offering compelling fashion to express yourself.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="stickyHeader">
        <div className="optionsOut">
          <div className="active options">
            Posts
          </div>
          <div className="options">
            Recommended Products
        </div>
        </div>
      </div>{
        postSate ?
          <>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post /></>
          :
          <>
            <div className='recomded-productwap'>
              <div className='row product-wap--flex-recom'>
                <div className='col-6 recomded-col-wap'>
                  <div className='product-boxwap-elemnt'>
                    <div className='product-imgrecomded'>
                      <img src="https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/486785/2020/2/24/ee5fed7d-56b7-4d4f-95e1-0d94ffe101c01582524530579-INVICTUS-Men-Blue-Slim-Fit-Formal-Shirt-1001582524528919-1.jpg" alt="product web" />
                    </div>
                    <div className='recom--discweb-titles'>
                      <h4 className='head-product-web'>INVICTUS <svg className='wishlist--icon' width="12" height="12" viewBox="0 0 24 24" fill="rgba(40, 44, 63, 0.7)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 4.918c1.07-1.222 2.597-1.936 4.216-1.918C19.466 3.002 22 5.809 22 9.16c0 1.354-.5 2.673-1.23 3.883-.73 1.214-1.717 2.362-2.755 3.388-2.078 2.052-4.438 3.686-5.605 4.447a.75.75 0 0 1-.82 0c-1.167-.76-3.527-2.395-5.605-4.447-1.038-1.026-2.025-2.175-2.756-3.388C2.501 11.833 2 10.513 2 9.16 2 5.809 4.534 3.002 7.786 3c1.621-.018 3.14.698 4.212 1.918Zm-.642 1.657C10.564 5.249 9.215 4.483 7.8 4.5H7.79C5.464 4.5 3.5 6.533 3.5 9.16c0 .986.368 2.036 1.014 3.11.645 1.07 1.54 2.12 2.526 3.094 1.757 1.735 3.746 3.171 4.96 3.987 1.214-.816 3.203-2.252 4.96-3.987.987-.974 1.881-2.024 2.526-3.095.646-1.073 1.014-2.123 1.014-3.109 0-2.627-1.964-4.66-4.29-4.66h-.009c-1.418-.017-2.775.75-3.555 2.072a.75.75 0 0 1-1.29.003Z" fill="rgba(40, 44, 63, 0.7)"></path></svg></h4>
                      <p className='short-disc-recom-mn'>Men Checked Slim Fit Formal</p>
                      <span className='price-head-wig'>₹ 1,899</span>
                    </div>
                  </div>
                </div>
                <div className='col-6 recomded-col-wap'>
                  <div className='product-boxwap-elemnt'>
                    <div className='product-imgrecomded'>
                      <img src="https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/452660/2018/4/26/11524741437398-INVICTUS-Men-Red--Black-Checked-Slim-Fit-Formal-Shirt-2771524741437185-1.jpg" />
                    </div>
                    <div className='recom--discweb-titles'>
                      <h4 className='head-product-web'>INVICTUS <svg className='wishlist--icon' width="12" height="12" viewBox="0 0 24 24" fill="rgba(40, 44, 63, 0.7)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 4.918c1.07-1.222 2.597-1.936 4.216-1.918C19.466 3.002 22 5.809 22 9.16c0 1.354-.5 2.673-1.23 3.883-.73 1.214-1.717 2.362-2.755 3.388-2.078 2.052-4.438 3.686-5.605 4.447a.75.75 0 0 1-.82 0c-1.167-.76-3.527-2.395-5.605-4.447-1.038-1.026-2.025-2.175-2.756-3.388C2.501 11.833 2 10.513 2 9.16 2 5.809 4.534 3.002 7.786 3c1.621-.018 3.14.698 4.212 1.918Zm-.642 1.657C10.564 5.249 9.215 4.483 7.8 4.5H7.79C5.464 4.5 3.5 6.533 3.5 9.16c0 .986.368 2.036 1.014 3.11.645 1.07 1.54 2.12 2.526 3.094 1.757 1.735 3.746 3.171 4.96 3.987 1.214-.816 3.203-2.252 4.96-3.987.987-.974 1.881-2.024 2.526-3.095.646-1.073 1.014-2.123 1.014-3.109 0-2.627-1.964-4.66-4.29-4.66h-.009c-1.418-.017-2.775.75-3.555 2.072a.75.75 0 0 1-1.29.003Z" fill="rgba(40, 44, 63, 0.7)"></path></svg></h4>
                      <p className='short-disc-recom-mn'>Men Checked Slim Fit Formal</p>
                      <span className='price-head-wig'>₹ 1,899</span>
                    </div>
                  </div>
                </div>
                <div className='col-6 recomded-col-wap'>
                  <div className='product-boxwap-elemnt'>
                    <div className='product-imgrecomded'>
                      <img src="https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/486785/2020/2/24/ee5fed7d-56b7-4d4f-95e1-0d94ffe101c01582524530579-INVICTUS-Men-Blue-Slim-Fit-Formal-Shirt-1001582524528919-1.jpg" alt="product web" />
                    </div>
                    <div className='recom--discweb-titles'>
                      <h4 className='head-product-web'>INVICTUS <svg className='wishlist--icon' width="12" height="12" viewBox="0 0 24 24" fill="rgba(40, 44, 63, 0.7)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 4.918c1.07-1.222 2.597-1.936 4.216-1.918C19.466 3.002 22 5.809 22 9.16c0 1.354-.5 2.673-1.23 3.883-.73 1.214-1.717 2.362-2.755 3.388-2.078 2.052-4.438 3.686-5.605 4.447a.75.75 0 0 1-.82 0c-1.167-.76-3.527-2.395-5.605-4.447-1.038-1.026-2.025-2.175-2.756-3.388C2.501 11.833 2 10.513 2 9.16 2 5.809 4.534 3.002 7.786 3c1.621-.018 3.14.698 4.212 1.918Zm-.642 1.657C10.564 5.249 9.215 4.483 7.8 4.5H7.79C5.464 4.5 3.5 6.533 3.5 9.16c0 .986.368 2.036 1.014 3.11.645 1.07 1.54 2.12 2.526 3.094 1.757 1.735 3.746 3.171 4.96 3.987 1.214-.816 3.203-2.252 4.96-3.987.987-.974 1.881-2.024 2.526-3.095.646-1.073 1.014-2.123 1.014-3.109 0-2.627-1.964-4.66-4.29-4.66h-.009c-1.418-.017-2.775.75-3.555 2.072a.75.75 0 0 1-1.29.003Z" fill="rgba(40, 44, 63, 0.7)"></path></svg></h4>
                      <p className='short-disc-recom-mn'>Men Checked Slim Fit Formal</p>
                      <span className='price-head-wig'>₹ 1,899</span>
                    </div>
                  </div>
                </div>
                <div className='col-6 recomded-col-wap'>
                  <div className='product-boxwap-elemnt'>
                    <div className='product-imgrecomded'>
                      <img src="https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/452660/2018/4/26/11524741437398-INVICTUS-Men-Red--Black-Checked-Slim-Fit-Formal-Shirt-2771524741437185-1.jpg" />
                    </div>
                    <div className='recom--discweb-titles'>
                      <h4 className='head-product-web'>INVICTUS <svg className='wishlist--icon' width="12" height="12" viewBox="0 0 24 24" fill="rgba(40, 44, 63, 0.7)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 4.918c1.07-1.222 2.597-1.936 4.216-1.918C19.466 3.002 22 5.809 22 9.16c0 1.354-.5 2.673-1.23 3.883-.73 1.214-1.717 2.362-2.755 3.388-2.078 2.052-4.438 3.686-5.605 4.447a.75.75 0 0 1-.82 0c-1.167-.76-3.527-2.395-5.605-4.447-1.038-1.026-2.025-2.175-2.756-3.388C2.501 11.833 2 10.513 2 9.16 2 5.809 4.534 3.002 7.786 3c1.621-.018 3.14.698 4.212 1.918Zm-.642 1.657C10.564 5.249 9.215 4.483 7.8 4.5H7.79C5.464 4.5 3.5 6.533 3.5 9.16c0 .986.368 2.036 1.014 3.11.645 1.07 1.54 2.12 2.526 3.094 1.757 1.735 3.746 3.171 4.96 3.987 1.214-.816 3.203-2.252 4.96-3.987.987-.974 1.881-2.024 2.526-3.095.646-1.073 1.014-2.123 1.014-3.109 0-2.627-1.964-4.66-4.29-4.66h-.009c-1.418-.017-2.775.75-3.555 2.072a.75.75 0 0 1-1.29.003Z" fill="rgba(40, 44, 63, 0.7)"></path></svg></h4>
                      <p className='short-disc-recom-mn'>Men Checked Slim Fit Formal</p>
                      <span className='price-head-wig'>₹ 1,899</span>
                    </div>
                  </div>
                </div>
                <div className='col-6 recomded-col-wap'>
                  <div className='product-boxwap-elemnt'>
                    <div className='product-imgrecomded'>
                      <img src="https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/486785/2020/2/24/ee5fed7d-56b7-4d4f-95e1-0d94ffe101c01582524530579-INVICTUS-Men-Blue-Slim-Fit-Formal-Shirt-1001582524528919-1.jpg" alt="product web" />
                    </div>
                    <div className='recom--discweb-titles'>
                      <h4 className='head-product-web'>INVICTUS <svg className='wishlist--icon' width="12" height="12" viewBox="0 0 24 24" fill="rgba(40, 44, 63, 0.7)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 4.918c1.07-1.222 2.597-1.936 4.216-1.918C19.466 3.002 22 5.809 22 9.16c0 1.354-.5 2.673-1.23 3.883-.73 1.214-1.717 2.362-2.755 3.388-2.078 2.052-4.438 3.686-5.605 4.447a.75.75 0 0 1-.82 0c-1.167-.76-3.527-2.395-5.605-4.447-1.038-1.026-2.025-2.175-2.756-3.388C2.501 11.833 2 10.513 2 9.16 2 5.809 4.534 3.002 7.786 3c1.621-.018 3.14.698 4.212 1.918Zm-.642 1.657C10.564 5.249 9.215 4.483 7.8 4.5H7.79C5.464 4.5 3.5 6.533 3.5 9.16c0 .986.368 2.036 1.014 3.11.645 1.07 1.54 2.12 2.526 3.094 1.757 1.735 3.746 3.171 4.96 3.987 1.214-.816 3.203-2.252 4.96-3.987.987-.974 1.881-2.024 2.526-3.095.646-1.073 1.014-2.123 1.014-3.109 0-2.627-1.964-4.66-4.29-4.66h-.009c-1.418-.017-2.775.75-3.555 2.072a.75.75 0 0 1-1.29.003Z" fill="rgba(40, 44, 63, 0.7)"></path></svg></h4>
                      <p className='short-disc-recom-mn'>Men Checked Slim Fit Formal</p>
                      <span className='price-head-wig'>₹ 1,899</span>
                    </div>
                  </div>
                </div>
                <div className='col-6 recomded-col-wap'>
                  <div className='product-boxwap-elemnt'>
                    <div className='product-imgrecomded'>
                      <img src="https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/452660/2018/4/26/11524741437398-INVICTUS-Men-Red--Black-Checked-Slim-Fit-Formal-Shirt-2771524741437185-1.jpg" />
                    </div>
                    <div className='recom--discweb-titles'>
                      <h4 className='head-product-web'>INVICTUS <svg className='wishlist--icon' width="12" height="12" viewBox="0 0 24 24" fill="rgba(40, 44, 63, 0.7)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.998 4.918c1.07-1.222 2.597-1.936 4.216-1.918C19.466 3.002 22 5.809 22 9.16c0 1.354-.5 2.673-1.23 3.883-.73 1.214-1.717 2.362-2.755 3.388-2.078 2.052-4.438 3.686-5.605 4.447a.75.75 0 0 1-.82 0c-1.167-.76-3.527-2.395-5.605-4.447-1.038-1.026-2.025-2.175-2.756-3.388C2.501 11.833 2 10.513 2 9.16 2 5.809 4.534 3.002 7.786 3c1.621-.018 3.14.698 4.212 1.918Zm-.642 1.657C10.564 5.249 9.215 4.483 7.8 4.5H7.79C5.464 4.5 3.5 6.533 3.5 9.16c0 .986.368 2.036 1.014 3.11.645 1.07 1.54 2.12 2.526 3.094 1.757 1.735 3.746 3.171 4.96 3.987 1.214-.816 3.203-2.252 4.96-3.987.987-.974 1.881-2.024 2.526-3.095.646-1.073 1.014-2.123 1.014-3.109 0-2.627-1.964-4.66-4.29-4.66h-.009c-1.418-.017-2.775.75-3.555 2.072a.75.75 0 0 1-1.29.003Z" fill="rgba(40, 44, 63, 0.7)"></path></svg></h4>
                      <p className='short-disc-recom-mn'>Men Checked Slim Fit Formal</p>
                      <span className='price-head-wig'>₹ 1,899</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
      }
      <LoginBottomModal />
    </div>
  );
}

export default ProfileDetails;