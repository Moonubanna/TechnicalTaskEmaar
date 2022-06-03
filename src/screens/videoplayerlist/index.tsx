import React from 'react';
import {BookContext} from '../../contexts';
import VideoPlayerList from './VideoPlayerList';

const WorldPage = ({ navigation,route }) => {

    return (
        <BookContext.Provider value={{ navigation,route }}>
            <VideoPlayerList />
        </BookContext.Provider>
    )
}

export default WorldPage;