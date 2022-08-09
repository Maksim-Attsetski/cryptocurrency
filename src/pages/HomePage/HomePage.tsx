import React, {useEffect, useState} from 'react';
import {ITrendCoin} from "../../types/trendCoin";
import axios from "axios";

const HomePage = () => {
    const [trendCoin, setTrendCoin] = useState<ITrendCoin[] | null>(null)

    useEffect(() => {
        const url = 'https://api.coingecko.com/api/v3/search/trending'

        axios(url)
            .then(({data}) => {
                setTrendCoin(data.coins)
                console.log(data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <div>
            home page
            <br/><br/>

            {trendCoin && <div className={'flex flex-wrap gap-10'}>
                {trendCoin.map(({item}) =>
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <img src={item.large} alt={item.name}
                             className={'w-20 h-20'}
                        />
                    </div>
                )}
            </div>}
        </div>
    );
};

export default HomePage;