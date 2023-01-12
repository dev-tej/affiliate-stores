import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../assets/arrowBack.svg'
import { ReactComponent as Search } from '../../assets/search.svg'
import { ReactComponent as Settings } from '../../assets/settings.svg'
import { ReactComponent as Widget } from '../../assets/widget.svg'
import './header.scss';

function HeaderDark({renderRightButton = true}) {
    const navigate = useNavigate();

    return (
        <div className="headerMain-dark">
            <div className="headerContainer-dark">
                <div class="headerTitle-dark">
                    <div>
                        <ArrowBack onClick={() => navigate(-1)}/>
                    </div>
                    <p>Studio</p>
                </div>
                {renderRightButton && <div class="headerRight-dark">
                    <i className="fa fa-sun" onClick={() => navigate('/home?theme=light')}/>
                    <Widget />
                    <Settings />
                    <Search />
                </div>}
            </div>
        </div>
    );
}

export default HeaderDark;
