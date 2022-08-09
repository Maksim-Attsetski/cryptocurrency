import React, {FC, useEffect, useState} from 'react';
import MyLineChart from "../MyLineChart/MyLineChart";
import axios from "axios";

interface IProps {
    name: string,
}

const CoinMarket: FC<IProps> = ({name}) => {
    const [market, setMarket] = useState<any | null>(null)

    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${name}/market_chart`
        axios(url, {
            params: {
                vs_currency: 'usd', days: 30
            }
        })
            .then(({data}) => {
                setMarket(data.prices)
                console.log(data.prices)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [name])

    return (
        <div>
            {market && <MyLineChart data={market}/>}
        </div>
    );
};

export default CoinMarket;