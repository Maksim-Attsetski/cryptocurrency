import React, {FC} from 'react';
import style from './Header.module.scss';
import {routeNames} from "../../routes/routeNames";
import {NavLink} from "react-router-dom";
import {useTypedDispatch, useTypedSelector} from "../../hooks/redux";
import {changeTheme} from "../../redux/slices/themeSlice";

const Header: FC = () => {
    const {COINS, HOME} = routeNames
    const {isDark} = useTypedSelector(state => state.theme)
    const dispatch = useTypedDispatch()

    return (
        <header className={style.header}>
            <div className={style.header_body + ' container'}>
                <div className={'flex gap-4'}>
                    <NavLink to={HOME}>Home</NavLink>
                    <NavLink to={COINS}>Coins</NavLink>
                </div>
                <button className={'btn border-amber-400'}
                        onClick={() => dispatch(changeTheme())}>
                    {isDark ? 'Dark' : 'Light'}
                </button>
            </div>
        </header>
    );
};

export default Header;