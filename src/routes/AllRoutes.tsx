import React, {FC, useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {routeNames} from "./routeNames";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage/HomePage";
import CoinsPage from "../pages/CoinsPage/CoinsPage";
import CoinsList from "../components/CoinsList/CoinsList";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const AllRoutes: FC = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const {COINS, COINS_EXCHANGES, HOME, COINS_LIST} = routeNames

    useEffect(() => {
        if (pathname === '/') {
            navigate(HOME)
        }
    }, [pathname])

    return (
        <Routes>
            <Route path={HOME} element={<Layout/>}>
                <Route path={HOME} element={<HomePage/>} />
                <Route path={COINS} element={<CoinsPage/>} />
                <Route path={COINS_LIST} element={<CoinsList/>} />
                <Route path={HOME + '*'} element={<NotFoundPage/>} />
            </Route>
        </Routes>
    );
};

export default AllRoutes;