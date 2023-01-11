import React from 'react';
import { useLocation } from "react-router";
import ProfileSecond from './Profile2';
import ProfileDetails from './ProfileDetails';

function Profile() {

    const location = useLocation();

    if (!location.search.includes('dark')) {
        return <ProfileDetails />
    }else{
        return <ProfileSecond /> 
    }

}

export default Profile;