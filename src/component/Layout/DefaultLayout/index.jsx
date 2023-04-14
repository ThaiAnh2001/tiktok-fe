import { Header } from './Header';
import { Sidebar } from './Sidebar';
import PropType from 'prop-types';

import React from 'react';

export const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
        </div>
    );
};

DefaultLayout.propTypes = {
    children: PropType.any,
};
