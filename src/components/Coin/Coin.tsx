import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom";
import {ICoin} from "../../types/coin";
import axios from "axios";
import CoinMarket from "../CoinMarket/CoinMarket";
import {getChanges} from "../../utils/getChanges";

const Coin = () => {
    const {name} = useParams()
    const [coin, setCoin] = useState<ICoin | null>(null)

    useEffect(() => {
        if (!name) return

        const url = `https://api.coingecko.com/api/v3/coins/${name}/`
        axios(url, {
            params: {
                vs_currency: 'usd', days: 30
            }
        })
            .then(({data}) => {
                console.log(data)
                setCoin(data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [name])

    const changes = useMemo(() => {
        if (!coin) return

        const {
            price_change_percentage_24h,
            price_change_percentage_30d,
            price_change_percentage_60d,
            price_change_percentage_7d,
            price_change_percentage_14d,
            price_change_percentage_1y,
            current_price,
        } = coin.market_data

        return {
            '24h': price_change_percentage_24h,
            '7d': price_change_percentage_7d,
            '14d': price_change_percentage_14d,
            '30d': price_change_percentage_30d,
            '60d': price_change_percentage_60d,
            '1y': price_change_percentage_1y,
            'cur_price': current_price,
        }
    }, [coin])

    return (
        <section>
            {coin && <div className="container">
                <br/>
                <div>{coin.name}</div>
                <br/>
                <button className='btn'
                        onClick={() => window.history.back()}>Back
                </button>

                <br/><br/>
                <div>Rank in market – {coin.market_cap_rank}</div>
                <div>Coingecko score – {coin.coingecko_score}</div>
                <div>Price: {coin.market_data.current_price.usd} $</div>
                <br/>

                {changes && <ul className={'flex flex-wrap gap-4'}>
                    <li>Changes:</li>
                    <li>24h – {getChanges(changes['24h'])}</li>
                    <li>7d – {getChanges(changes['7d'])}</li>
                    <li>14d – {getChanges(changes['14d'])}</li>
                    <li>30d – {getChanges(changes['30d'])}</li>
                    <li>60d – {getChanges(changes['60d'])}</li>
                    <li>1y – {getChanges(changes['1y'])}</li>
                </ul>}

                <br/><br/>
                {name && <CoinMarket name={name}/>}

                <br/><br/>
                <div dangerouslySetInnerHTML={{__html: coin.description.en}}/>
            </div>}
        </section>
    );
};

export default Coin;