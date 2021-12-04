import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Asset from './Asset';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../AssetList/AssetList.css';


const AssetList = ({data, handleChange, filterExchange}) => {

    // onChange={onChangeColor.bind(this)}


    return(
        <div className="asset-list-container">
            <div className="filter-button">
                <label>Filter By: </label>
                <select onChange={handleChange}>
                    <option value="All" name="exchangeName">All</option>
                    <option value="Bitbns" name="exchangeName">Bitbns</option>
                    <option value="Binance" name="exchangeName"> Binance</option>
                    <option value="WazirX" name="exchangeName">WazirX</option>
                    <option value="Huobi" name="exchangeName">Huobi</option>
                    <option value="HitBTC" name="exchangeName">HitBTC</option>
                </select>
            </div>
            {filterExchange.map(asset=> <Asset key={asset.id} asset={asset}/>)}

        </div>

    )
}

export default AssetList;