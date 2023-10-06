import React from 'react'
import { Layout,  Col, Row,  Divider } from 'antd';
import payment from '../../assets/images/payment.svg'
import {
    GiftFilled,
    ReconciliationFilled,
    QuestionCircleFilled,
    ShoppingFilled,
} from '@ant-design/icons';

const { Footer } = Layout;
const footerStyle = {
    border: '1px solid rgb(224, 224, 235)',
    margin: 'auto', marginTop: '5%' ,
    // marginTop:' 20px',
    textAlign: 'center',
    // color: '#fff',
    // backgroundColor: ' #7D7C7C',
    backgroundColor: ' #113946',
    padding: '4%',
};

function FooterFlie() {
    return (
        <Footer style={footerStyle}>
            <Row >
                <Col span={24}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', textAlign: 'justify' }}>
                        <span style={{ color: 'silver', fontSize: '12px' }}>
                            ABOUT
                            <div style={{ color: 'white', padding: '8px', lineHeight: '100%' }}>
                                <p>Contact Us </p>
                                <p>About Us</p>
                                <p>Careers </p>
                                <p>FlipKart Stories</p>
                                <p>Press</p>
                                <p>Flipkaer Wholesales</p>
                                <p>Information </p>
                            </div>
                        </span>
                        <span style={{ color: 'silver', fontSize: '12px' }}>
                            HELP
                            <div style={{ color: 'white', padding: '8px', lineHeight: '100%' }}> <p>Payment</p>
                                <p>Shiping </p>
                                <p>FAQ</p>
                                <p>Cancelation & Return </p>
                                <p>Reports</p>

                            </div>
                        </span>
                        <span style={{ color: 'silver', fontSize: '12px' }}>
                            CONSUMER POLICY
                            <div style={{ color: 'white', padding: '8px', lineHeight: '100%' }}> <p>Return Policy</p>
                                <p>Term Of Use </p>
                                <p>Security</p>
                                <p>Privacy </p>
                                <p>Cencelation</p>
                                <p>SiteMap</p>
                                <p>Guidance </p>
                            </div>
                        </span>
                        <span style={{ color: 'silver', marginLeft: '5px', fontSize: '12px' }}>
                            SOCIAL
                            <div style={{ color: 'white', padding: '8px', lineHeight: '100%' }}><p>Twitter </p>
                                <p>Facebook</p>
                                <p>Youtube </p>
                            </div>
                        </span>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <div><Divider style={{ backgroundColor: 'silver', fontSize: '100%', height: '200px' }} type="vertical" /></div>
                            <span style={{ color: 'silver', fontSize: '12px' }}>
                                Mail Us:
                                <div style={{ color: 'white', padding: '8px', lineHeight: '40%' }} className='class'><p>Flipkart Internet Private Limited, </p>
                                    <p> Buildings Alyssa, Begonia &amp; </p>
                                    <p> Clove Embassy Tech Village, </p>
                                    <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                                    <p> Bengaluru, 560103, </p>
                                    <p> Karnataka, India</p>
                                </div>
                            </span>
                            <span style={{ color: 'silver', fontSize: '12px' }}>
                                Registered Office Address:
                                <div style={{ color: 'white', padding: '8px', lineHeight: '40%' }}><p>Flipkart Internet Private Limited, </p>
                                    <p> Buildings Alyssa, Begonia &amp; </p>
                                    <p> Clove Embassy Tech Village, </p>
                                    <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                                    <p> Bengaluru, 560103, </p>
                                    <p> Karnataka, India </p>
                                    <p> CIN : U51109KA2012PTC066107 </p>
                                    <p> Telephone: <a href="tel:044-45614700">044-45614700</a></p>
                                </div>
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
            <div style={{ backgroundColor: 'silver', fontSize: '100%', width: '100%' }}><Divider type="horizontal" /></div>
            <Row >
                <Col span={24} >
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <span style={{ color: 'yellow', fontSize: '18px' }}><ShoppingFilled />
                            <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>
                                Become Seller
                            </span>
                        </span>
                        <span style={{ color: 'yellow', fontSize: '18px' }}><ReconciliationFilled />
                            <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>
                                Advertise
                            </span>
                        </span>
                        <span style={{ color: 'yellow', fontSize: '18px' }}>   <GiftFilled />
                            <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>
                                Gift Cards
                            </span>
                        </span>
                        <span style={{ color: 'yellow', fontSize: '18px' }}><QuestionCircleFilled />
                            <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>
                                Help Center
                            </span>
                        </span>

                        <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>© 2007-2023
                            <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>Flipkart.com</span></span>
                        <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}><img src={payment} alt='ptm' />
                        </span>
                    </div>
                </Col>
            </Row>
        </Footer>
    )
}
export default FooterFlie;

