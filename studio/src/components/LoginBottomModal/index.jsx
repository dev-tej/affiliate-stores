import React, { useEffect, useState } from 'react';
import { ReactComponent as Cross } from '../../assets/crossIcon.svg'
import './styles.scss';

function LoginBottomModal() {

    const [openModal, setOpenModal] = useState(false)
    const image = 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/8cc74fa4-9191-45a4-95db-d0481cf867641662403714032-Sign-Up-Card_Flat----200-Off--1-.jpg'

    useEffect(() => {
        setTimeout(() => {
            setOpenModal(true)
        }, 5000);
    }, [])

    if (!openModal) {
        return null;
    }

    return (
        <div className="loginBottomModal">
            <div className="drawer  active">
                <div className="popupContent">
                    <div className="imageContainer">
                        <img src={image} alt="" width="100%" />
                        <div className="crossIcon" onClick={() => setOpenModal(!openModal)}>
                            <Cross />
                        </div>
                    </div>
                    <div className="popTittle">
                        <div className="tittle">
                            Login<span> or </span>Signup
                    </div>
                        <div className="inputOut">
                            <span className="number">+91</span>
                            <span className="divider">|</span>
                            <input type="number" />
                        </div>
                        <div className="midLinks">
                            By continuing, I agree of the <span>Term of Use</span> & <span>Privacy Policy</span>
                        </div>
                        <div className="button">
                            CONTINUE
                    </div>
                        <div className="midLinksHelp">
                            Have trouble logging in?<span> Get help</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LoginBottomModal;
