import React, {FC, useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {routeNames} from "./routeNames";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage/HomePage";
import CoinsPage from "../pages/CoinsPage/CoinsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import {useTypedDispatch} from "../hooks/redux";
import {setTheme} from "../redux/slices/themeSlice";
import Coin from "../components/Coin/Coin";

const AllRoutes: FC = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const dispatch = useTypedDispatch()
    const {COINS, COINS_EXCHANGES, HOME} = routeNames

    useEffect(() => {
        dispatch(setTheme())
    }, [])

    useEffect(() => {
        if (pathname === '/') {
            navigate(HOME)
        }
    }, [pathname])

    return (
        <Routes>
            <Route path={HOME} element={<Layout/>}>
                <Route path={HOME} element={<HomePage/>}/>
                <Route path={COINS} element={<CoinsPage/>}/>
                <Route path={COINS + ':name'} element={<Coin/>}/>
            </Route>
            <Route path={'/*'} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default AllRoutes;