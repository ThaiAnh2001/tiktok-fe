import React, { useState } from 'react';
import { HeaderLogo } from '@/until/img';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Stack } from '@mui/material';
import { Button } from '@/component/Button';
import { useStateContext } from '@/contexts/ContextProvider';

export const Header = () => {
    const [borderSearch, setBorderSearch] = useState(false);
    const { isLogin } = useStateContext();
    console.log(isLogin);
    const handleInputSearch = (value) => {
        if (value == 'focus') {
            setBorderSearch(true);
        } else {
            setBorderSearch(false);
        }
    };
    return (
        <div className="header">
            <div className="header__wrap">
                <div className="header__logo">
                    <img src={HeaderLogo} alt="img" />
                </div>
                <div
                    className="header__search abc"
                    style={{
                        border: `${borderSearch === true ? '1px solid #ccc' : '1px solid rgba(241, 241, 242, 1)'}`,
                    }}
                >
                    <form className="header__search">
                        <input
                            type="text"
                            placeholder="Search accounts and videos"
                            className="input__search"
                            onFocus={() => handleInputSearch('focus')}
                            onBlur={() => handleInputSearch('blur')}
                        />
                        <button>
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#797a7c', fontSize: '18px' }} />
                        </button>
                    </form>
                </div>
                <div className="header__task">
                    <Stack direction="row" spacing={2}>
                        <Button theme="medium_outline">
                            <FontAwesomeIcon icon={faPlus} />
                            Upload
                        </Button>
                        <Button>Login</Button>
                    </Stack>
                    <div className="header__task__icon">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>
        </div>
    );
};
