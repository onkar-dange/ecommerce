import { Row, Col, Input, Typography, Button } from 'antd';
import Address from './address'

export default function Footer() {
    return (
        <div className='footer'>
            <Row>
                <Col xs={0} sm={0} md={3}></Col>
                <Col xs={24} sm={24} md={6} className='footer-block'>
                    <Address />
                </Col>
                <Col xs={24} sm={24} md={6} className='footer-block'>
                    <Address />
                </Col>
                <Col xs={24} sm={24} md={6} className='footer-block'>
                    <div>
                        <ul>
                            <li>Waste managment</li>
                            <li>Supply microbil-culture powder</li>
                            <li>Supply saw dust</li>
                            <li>Installation, Maintanance and operating of OWC</li>
                            <li>AMC of all our products</li>
                        </ul>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={3}></Col>
            </Row>
        </div>
    )
}