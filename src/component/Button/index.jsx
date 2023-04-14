import styled from 'styled-components';

const theme = {
    medium_contained: {
        color: 'rgba(255, 255, 255, 1)',
        width: '100px',
        height: '36px',
        default: 'rgba(254, 44, 85, 1)',
        border: 'none',
        hover: 'linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)),#FE2C55',
        activated: 'linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)),#FE2C55',
        fontSize: '16px',
        fontWeight: '600',
    },
    medium_outline: {
        color: 'rgba(22, 24, 35, 1)',
        width: '113px',
        height: '36px',
        default: '#FFFFFF',
        hover: 'rgba(22, 24, 35, .03)',
        activated: 'rgba(22, 24, 35, .06)',
        border: '1px solid rgba(22, 24, 35, 0.12)',
        fontSize: '16px',
        fontWeight: '600',
    },
};

const Button = styled.button`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${(props) => theme[props.theme].default};
    width: ${(props) => theme[props.theme].width};
    height: ${(props) => theme[props.theme].height};
    color: ${(props) => theme[props.theme].color};
    border: ${(props) => theme[props.theme].border};
    font-size: ${(props) => theme[props.theme].fontSize};
    font-weight: ${(props) => theme[props.theme].fontWeight};
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background: ${(props) => theme[props.theme].hover};
        background-color: ${(props) => theme[props.theme].hover};
    }
    &:active {
        background: ${(props) => theme[props.theme].activated};
        background-color: ${(props) => theme[props.theme].activated};
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
        pointer-events: none;
    }
`;

Button.defaultProps = {
    theme: 'medium_contained',
};

export { Button };
