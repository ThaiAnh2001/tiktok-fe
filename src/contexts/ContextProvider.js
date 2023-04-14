import React, { createContext, useContext, useState } from 'react';
import PropType from 'prop-types';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(true);
    return <StateContext.Provider value={{ isLogin, setIsLogin }}>{children}</StateContext.Provider>;
};

ContextProvider.propTypes = {
    children: PropType.any,
};

export const useStateContext = () => useContext(StateContext);
