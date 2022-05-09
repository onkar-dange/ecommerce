import { Row, Col, Input,Typography, Button } from 'antd';
import { UserOutlined, MobileOutlined, MailOutlined } from '@ant-design/icons';


function ContactPage() {
    const { TextArea } = Input;
    const { Title } = Typography;
    return (
        <Row>
            <Col xs={1} sm={1} md={7} lg={7} xl={7}>
            </Col>
            <Col xs={22} sm={22} md={10} lg={10} xl={10}>
                <div className="contactBox">
                <Title>Contact Us</Title> 
                    <Input className='fname' size="large" placeholder="full name" type="text" prefix={<UserOutlined />} />
                    <br />
                    <Input className='femail' size="large" placeholder="email" type="email" prefix={<MailOutlined />} />
                    <br />
                    <Input className='fnumber' size="large" placeholder="mobile" type="number" prefix={<MobileOutlined />} />
                    <br />
                    <TextArea className='fmessage' rows={4} />
                    <Button className='btn' size="large" type="primary">Submit</Button>
                </div>
            </Col>
            <Col xs={1} sm={1} md={7} lg={7} xl={7}>
            </Col>
        </Row>
    )
}

export default ContactPage