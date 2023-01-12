import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/arrowBack.svg'
import { ReactComponent as Search } from '../../assets/search.svg'
import { ReactComponent as Settings } from '../../assets/settings.svg'
import { ReactComponent as Widget } from '../../assets/widget.svg'
import './header.scss';

function Header({renderRightButton = true}) {
    const navigate = useNavigate();

    return (
        <div className="headerMain">
            <div className="headerContainer">
                <div class="headerTitle">
                    <div>
                        <ArrowBack onClick={() => navigate(-1)}/>
                    </div>
                    <p>
                        Studio
                    </p>
                </div>
                {renderRightButton && <div class="headerRight">
                    <i className="fa fa-moon" onClick={() => navigate('/home?theme=dark')}/>
                    <Widget />
                    <Settings />
                    <Search />
                </div>}
            </div>
        </div>
    );
}

export default Header;
