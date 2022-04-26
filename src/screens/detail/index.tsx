import React, {useEffect} from 'react';
import {BookContext} from '../../contexts';
import Detail from './Detail';

const WorldPage = ({ navigation,route }) => {

    useEffect(() => {
    }, []);

    return (
        <BookContext.Provider value={{ navigation,route }}>
            <Detail />
        </BookContext.Provider>
    )
}

export default WorldPage;