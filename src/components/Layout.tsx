import React, {FC} from 'react';
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";

const Layout: FC = () => {
    return (
        <div className='app'>
            <Header/>
            <main><Outlet/></main>
            <footer>footer</footer>
        </div>
    );
};

export default Layout;