import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Asset.css'

const Asset =({asset:{exchangeName, coinCode, coinFullName, amount, buyAtPrice, discription}})=>{


    return(
        <Container className="asset-container">
            <Row className="">
                <Col className="asset-detail">
                    <label>Exchange Name:</label>
                    <span className = "exchangeName">{exchangeName}</span>
                </Col>
                <Col className="asset-detail">
                    <label>Coin Code:</label>
                    <span className="coinCode">{coinCode}</span>
                </Col>
                <Col className="asset-detail">
                    <label>Amount:</label>
                    <span className="coinCode">{amount}</span>
                </Col>
                <Col className="asset-detail">
                    <label>Buy@Price:</label>
                    <span className="coinCode">{buyAtPrice}</span>
                </Col>
                <Col className="asset-detail">
                    <label>Coin Full Name:</label>
                    <span className="coinCode">{coinFullName}</span>
                </Col>
            </Row>
            <Row>

                <Col className="asset-detail">
                    <label>Discription:</label>
                    <span className="coinCode">{discription}</span>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Asset;