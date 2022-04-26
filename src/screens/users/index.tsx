import React, {useEffect} from 'react';
import {BookContext} from '../../contexts';
import Users from './Users';

const WorldPage = ({ navigation,route }) => {

    useEffect(() => {
    }, []);

    return (
        <BookContext.Provider value={{ navigation,route }}>
            <Users />
        </BookContext.Provider>
    )
}

export default WorldPage;