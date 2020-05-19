import React, { useEffect } from 'react';


const ProfilePage = (props) => {
    const { profilePlaylist, getProfilePlaylist } = props;

    useEffect(() => {
        getProfilePlaylist();
    }, [getProfilePlaylist])

    console.log(profilePlaylist)
    return (
        <>
            hello
        </>
    );
}

export default ProfilePage;