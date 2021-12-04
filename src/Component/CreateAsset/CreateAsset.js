import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CreateAsset/CreateAsset.css';

const CreateAsset=(props)=>{

    const {createAssetList}= props;
    let history = useHistory()

    const submitData=(evt)=>{
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const newData = {};

        for (const [key, value] of formData) {
            if(value)
            newData[key] = value;
        } 
        console.log(newData); 
        createAssetList(newData);
        evt.target.reset();

        const location = {
          pathname: '/',
        }
        
        history.push(location)
        console.log(newData);
            
    }


    return(
        <div className="create-asset-container">
            <Form onSubmit={submitData}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}> Exchange Name: </Form.Label>
                    <Col sm={10}>
                    <Form.Select defaultValue="Choose..." name="exchangeName">
                        <option>Choose...</option>
                        <option value="Bitbns" name="exchangeName">Bitbns</option>
                        <option value="Binance" name="exchangeName"> Binance</option>
                        <option value="WazirX" name="exchangeName">WazirX</option>
                        <option value="Huobi" name="exchangeName">Huobi</option>
                        <option value="HitBTC" name="exchangeName">HitBTC</option>

                    </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}> Coin Code: </Form.Label>
                    <Col sm={10}>
                    <Form.Select defaultValue="Choose..." name="coinCode">
                        <option>Choose...</option>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="ICP">ICP</option>
                        <option value="TRX">TRX</option>
                        <option value="XRP">XRP</option>
                    </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}> Coin Full Name: </Form.Label>
                    <Col sm={10}>
                    <Form.Select defaultValue="Choose..." name="coinFullName">
                        <option>Choose...</option>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="Ethereum">Ethereum</option>
                        <option value="Internet Computer">Internet Computer</option>
                        <option value="Tron">Tron</option>
                        <option value="Ripple">Ripple</option>
                    </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}> Discription: </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="Discription..."  name="discription"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}> Amount: </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="number" placeholder="Amount"  name="amount"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}> Buy@Price: </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="number" placeholder="Buy at price"  name="buyAtPrice"/>
                    </Col>
                </Form.Group> 
                             
                <Button variant="primary" type="submit" style={{marginLeft:'585px'}}> Submit </Button>       
        </Form>
      </div>
    )
}

export default CreateAsset;