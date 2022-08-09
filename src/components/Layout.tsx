import React, {FC, useEffect} from 'react';
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import {setTheme} from "../redux/slices/themeSlice";
import {useTypedDispatch} from "../hooks/redux";

const Layout: FC = () => {
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(setTheme())
    }, [])

    return (
        <div className='app'>
            <Header/>
            <main><Outlet/></main>
            <footer>footer</footer>
        </div>
    );
};

export default Layout;