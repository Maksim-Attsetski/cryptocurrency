import React, {FC, useEffect, useState} from 'react';
import style from './CoinsPage.module.scss';
import axios from "axios";
import {ICoinMarket} from "../../types/coinMarket";
import {getChanges} from "../../utils/getChanges";
import {Link} from "react-router-dom";
import {routeNames} from "../../routes/routeNames";

const CoinsPage: FC = () => {
    const [markets, setMarkets] = useState<ICoinMarket[]>([])

    useEffect(() => {
        const url = 'https://api.coingecko.com/api/v3/coins/markets'
        axios(url, {
            params: {
                vs_currency: 'usd',
            }
        })
            .then(({data}) => {
                console.log(data)
                setMarkets(data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <div className={style.coins}>
            <div className="container">
                <div>coins list</div>
                <br/><br/>

                {markets && <div className={style.coins_list}>
                    {markets.map((market) =>
                        <div key={market.id} className={style.coin}>
                            <div>
                                <div>name: {market.name}</div>
                                <div>price: {market.current_price}</div>
                                <div>changes in
                                    24h: {getChanges(market.price_change_24h)}</div>
                                <div>
                                    <Link to={routeNames.COINS + market.id}>Open</Link>
                                </div>
                            </div>
                            <div>
                                <img src={market.image} alt={market.name}/>
                            </div>
                        </div>
                    )}
                </div>}
            </div>
        </div>
    );
};

export default CoinsPage;