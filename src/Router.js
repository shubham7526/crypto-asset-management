import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink, 
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateAsset from './Component/CreateAsset/CreateAsset';
import AssetList from "./Component/AssetList/AssetList";
import './Router.css';


const PageRouter = ({createAssetList, data, handleChange, filterExchange}) =>{
    
    return (
        <Router>
            <div className="body">
                <Nav variant="tabs" defaultActiveKey="/" className="nav-bar">
                    <Nav.Item>
                        <NavLink to="/" className="header">Asset List</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink  to="/createasset" className="header">Creat Asset</NavLink>
                    </Nav.Item>
                    
                </Nav>
                
                <Switch>
                    <Route path="/createasset">
                        <CreateAsset  createAssetList={createAssetList}/>
                    </Route>
                    <Route path="/">
                        <AssetList data={data} handleChange={handleChange} filterExchange={filterExchange} />
                    </Route>
                </Switch>
            </div>
        </Router>
        )
}
 export default PageRouter;