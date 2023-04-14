import React from 'react';
import { Header } from '../DefaultLayout/Header';
import PropType from 'prop-types';

export const HeaderLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
};

HeaderLayout.propTypes = {
    children: PropType.any,
};
