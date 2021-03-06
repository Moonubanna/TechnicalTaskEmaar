import React from 'react';
import {BookContext} from '../../contexts';
import Users from './Users';

const WorldPage = ({ navigation,route }) => {

    return (
        <BookContext.Provider value={{ navigation,route }}>
            <Users />
        </BookContext.Provider>
    )
}

export default WorldPage;