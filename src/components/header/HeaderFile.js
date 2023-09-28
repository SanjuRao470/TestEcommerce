import React from 'react'
import { Layout, Col, Row, Modal, Avatar, Image, Divider, Button, Input, Tooltip, } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import {
    GiftOutlined, DownOutlined, LogoutOutlined, ShoppingCartOutlined, ZoomInOutlined,
    BorderOuterOutlined, SearchOutlined, GoogleOutlined, UserOutlined
} from '@ant-design/icons';
const { Header } = Layout;
const text = <div >
    <p style={{ color: '#005ce6', fontSize: '18px' }} > < UserOutlined />
        <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>
        <Link to='/login'>My Profile</Link>  
        </span>
    </p>

    <p style={{ color: '#005ce6', fontSize: '18px' }}>   <ZoomInOutlined />
        <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>
            FlipKart Plus Zone
        </span>
    </p>
    <p style={{ color: '#005ce6', fontSize: '18px' }}>   <BorderOuterOutlined />
        <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>
            Orders
        </span>
    </p>
    <p style={{ color: '#005ce6', fontSize: '18px' }}>   <GiftOutlined />
        <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>
            Gift Card
        </span>
    </p>
</div>;
const user = <div >
    <p style={{ color: '#005ce6', fontSize: '18px' }} > < UserOutlined />
        <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>
            Notification
        </span>
    </p>

    <p style={{ color: '#005ce6', fontSize: '18px' }}>   <ZoomInOutlined />
        <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>
            24 * 7 Customer Care
        </span>
    </p>
    <p style={{ color: '#005ce6', fontSize: '18px' }}>   <BorderOuterOutlined />
        <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>
            Advertise
        </span>
    </p>
    <p style={{ color: '#005ce6', fontSize: '18px' }}>   <GiftOutlined />
        <span style={{ color: 'white', marginLeft: '10px', fontSize: '12px' }}>
            Download App
        </span>
    </p>
</div>;
const buttonWidth = 100;
const btnProps = {
    style: {
        width: buttonWidth,
    },
};

// const headerStyle1 = {
//     textAlign: 'center',
//     top: '3em',
//     zindex: 1,
//     height: 60,
//     backgroundColor: "#fff",
//     color: "white",
//     margin: "auto",
//     width: " 95%",
//     marginTop: ' 20px',

// };

const headerStyle = {
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    height: 60,
    backgroundColor: "#005ce6",
    color: "white",
    width: "100%",
    paddingLeft: 35,
    paddingRight: 35,
    position: "fixed",
    // top: 0

};
function HeaderFlie() {
    // const [collapsed, setCollapsed] = useState(false);
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    const [first, setFirst] = useState([])
    // const [data, setData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const SelectHandler = (e) => {
        if (e.target.value === '') {
            setFirst(first)
        } else {
            const filterResult = first.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
            console.log('llllll', filterResult);
            setFirst(filterResult);
        }
    }
    return (
        <div>
            <Header style={headerStyle}>
                <Row
                    gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}
                >
                    <Col span={24}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '15px' }}>
                               FlipKart
                            </span>
                            <span style={{ marginLeft: '10px' }}>
                                <Input
                                    placeholder="Enter your username"
                                    onChange={(e) => SelectHandler(e)}
                                    suffix={
                                        <Tooltip title="Extra information">
                                            <SearchOutlined style={{ color: '#red' }} />
                                        </Tooltip>
                                    }
                                />
                            </span>
                            <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '15px' }}>
                                <Tooltip placement="bottom" title={text} >
                                    {isAuthenticated ? (
                                        <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                            Log Out
                                        </Button>
                                    ) : (
                                        <Button {...btnProps} onClick={() => loginWithRedirect()}><Link to='/login'></Link>Login</Button>
                                    )}
                                </Tooltip>
                            </span>
                            <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '15px' }}>
                                <Tooltip placement="bottom" title={user} >
                                    Become a Seller
                                    <DownOutlined />
                                </Tooltip>
                            </span>
                            <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '15px' }} >
                                <span onClick={showModal}>
                                    <Avatar size="small" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />Profile</span>
                            </span>
                            <Modal style={{ backgroundColor: '#002766' }} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', fontWeight: 'bold', fontSize: '25px', marginBottom: '10px', backgroundColor: '#002766', color: 'white' }}>User Page</div>
                                <Row style={{ backgroundColor: ' #002766', border: '10px solid WHITE', padding: '15px', borderRadius: '30px' }}>
                                    <Col span={12} style={{ backgroundColor: '#bfbfbf' }}>
                                        <div style={{ marginLeft: '65px' }}>
                                            <Image
                                                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', color: 'red' }}
                                                width={90}
                                                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                            />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <span style={{ color: '#610b00', marginLeft: '60px', fontSize: '13px', fontWeight: 'bold' }}>
                                                SAKSHI TANWAR
                                            </span>
                                            <span style={{ color: '#00264d', fontSize: '18px', marginLeft: '50px' }}><UserOutlined />
                                                <span style={{ color: '#262626', marginLeft: '10px', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>
                                                    Profile
                                                </span>
                                            </span>
                                            <span style={{ color: '#00264d', fontSize: '18px', marginLeft: '50px' }}><GoogleOutlined />
                                                <span style={{ color: '#262626', marginLeft: '10px', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>
                                                    payment
                                                </span>
                                            </span>
                                            <span style={{ color: '#00264d', fontSize: '18px', marginLeft: '50px' }}><LogoutOutlined />
                                                <span style={{ color: '#262626', marginLeft: '10px', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>
                                                    Logout
                                                </span>
                                            </span>

                                        </div>
                                    </Col>
                                    <Col span={6} style={{ backgroundColor: '#bfbfbf', padding: '20px' }}>

                                        <p style={{ color: '#262626', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>First Name:</p>
                                        <p style={{ color: '#262626', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>Last Name:</p>
                                        <p style={{ color: '#262626', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>Email:</p>
                                        <p style={{ color: '#262626', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>Product</p>
                                        <p style={{ color: '#262626', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>Quantity</p>

                                    </Col>
                                    <Col span={6} style={{ backgroundColor: '#bfbfbf', padding: '20px' }}>
                                        <p style={{ color: '#262626', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>Sakshi</p>
                                        <p style={{ color: '#262626', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>Tanwar</p>
                                        <p style={{ color: '#262626', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>gmail.com</p>
                                        <p style={{ color: '#262626', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>Kurta</p>
                                        <p style={{ color: '#262626', fontWeight: 'bold', fontSize: '12px', fontStyle: 'italic' }}>3</p>

                                    </Col>
                                </Row>
                            </Modal>
                            <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '15px' }}>
                                <ShoppingCartOutlined /> Cart
                            </span>
                        </div>
                    </Col>
                </Row>
            </Header>
            {/* <Header style={headerStyle1}>
                <Row gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}>
                    <Col span={24}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                <Dropdown
                                    menu={{
                                        items: [
                                            {
                                                key: '1',
                                                label: 'Cooler',
                                            },
                                            {
                                                key: '2',
                                                label: 'Air Conditioner',
                                            },
                                            {
                                                key: '3',
                                                label: 'Ceiling fan',
                                            },
                                            {
                                                key: '4',
                                                label: 'OPPO',
                                            },
                                            {
                                                key: '5',
                                                label: 'Realme',
                                            },
                                            {
                                                key: '6',
                                                label: 'Sansui Tv',
                                            },
                                            {
                                                key: '7',
                                                label: 'DishTV',
                                            },
                                        ],
                                        selectable: true,
                                        defaultSelectedKeys: ['7'],
                                    }}
                                >
                                    <Typography.Link>
                                        <Space style={{ color: 'black', fontWeight: 'bold' }}>
                                            Electronics
                                            <DownOutlined />
                                        </Space>
                                    </Typography.Link>
                                </Dropdown>
                            </span>
                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                <Dropdown
                                    menu={{
                                        items: [
                                            {
                                                key: '1',
                                                label: 'Television',
                                            },
                                            {
                                                key: '2',
                                                label: 'Washing Machine',
                                            },
                                            {
                                                key: '3',
                                                label: 'Kitchen Appliance',
                                            },
                                            {
                                                key: '4',
                                                label: 'Home Appliance',
                                            },
                                            {
                                                key: '5',
                                                label: 'Refrigenrator',
                                            },
                                            {
                                                key: '6',
                                                label: 'Hitachi',
                                            },
                                            {
                                                key: '7',
                                                label: 'Small AC',
                                            },
                                        ],
                                        selectable: true,
                                        defaultSelectedKeys: ['7'],
                                    }}
                                >
                                    <Typography.Link>
                                        <Space style={{ color: 'black', fontWeight: 'bold' }}>
                                            TVs & Appliances
                                            <DownOutlined />
                                        </Space>
                                    </Typography.Link>
                                </Dropdown>
                            </span>

                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                <Dropdown
                                    menu={{
                                        items: [
                                            {
                                                key: '1',
                                                label: 'FootWear',
                                            },
                                            {
                                                key: '2',
                                                label: 'Casual Wear',
                                            },
                                            {
                                                key: '3',
                                                label: 'Sports Shoes',
                                            },
                                            {
                                                key: '4',
                                                label: 'Formal Clothe',
                                            },
                                            {
                                                key: '5',
                                                label: 'T-Shirts',
                                            },
                                            {
                                                key: '6',
                                                label: 'Sneakers',
                                            },
                                            {
                                                key: '7',
                                                label: 'Sheos',
                                            },
                                        ],
                                        selectable: true,
                                        defaultSelectedKeys: ['7'],
                                    }}
                                >
                                    <Typography.Link>
                                        <Space style={{ color: 'black', fontWeight: 'bold' }}>
                                            Men
                                            <DownOutlined />
                                        </Space>
                                    </Typography.Link>
                                </Dropdown>
                            </span>
                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                <Dropdown
                                    menu={{
                                        items: [
                                            {
                                                key: '1',
                                                label: 'Shirts',
                                            },
                                            {
                                                key: '2',
                                                label: 'Palazo',
                                            },
                                            {
                                                key: '3',
                                                label: 'Froak',
                                            },
                                            {
                                                key: '4',
                                                label: 'Jeans',
                                            },
                                            {
                                                key: '5',
                                                label: 'Suit-Salvar',
                                            },
                                            {
                                                key: '6',
                                                label: 'Kurta',
                                            },
                                            {
                                                key: '7',
                                                label: 'Sarees',
                                            },
                                        ],
                                        selectable: true,
                                        defaultSelectedKeys: ['7'],
                                    }}
                                >
                                    <Typography.Link>
                                        <Space style={{ color: 'black', fontWeight: 'bold' }}>
                                            Women
                                            <DownOutlined />
                                        </Space>
                                    </Typography.Link>
                                </Dropdown>
                            </span>
                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                <Dropdown
                                    menu={{
                                        items: [{
                                            key: '1',
                                            label: '  Diapers',
                                        },
                                        {
                                            key: '2',
                                            label: 'Wipes',
                                        },
                                        {
                                            key: '3',
                                            label: 'Baby Bath, Hair & Skin Care',
                                        },
                                        {
                                            key: '4',
                                            label: 'Baby Grooming',
                                        },
                                        {
                                            key: '5',
                                            label: 'RBaby Gift Sets & Combo',
                                        },
                                        {
                                            key: '6',
                                            label: 'Baby Bathing Accessories',
                                        },
                                        {
                                            key: '7',
                                            label: 'Baby Oral Care',
                                        },
                                        ],
                                        selectable: true,
                                        defaultSelectedKeys: ['7'],
                                    }}
                                >
                                    <Typography.Link>
                                        <Space style={{ color: 'black', fontWeight: 'bold' }}>
                                            Baby & Kids
                                            <DownOutlined />
                                        </Space>
                                    </Typography.Link>
                                </Dropdown>
                            </span>
                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                <Dropdown
                                    menu={{
                                        items: [{
                                            key: '1',
                                            label: '    Bedsheets',
                                        },
                                        {
                                            key: '2',
                                            label: '  Curtains',
                                        },
                                        {
                                            key: '3',
                                            label: '  Cushions & Pillows',
                                        },
                                        {
                                            key: '4',
                                            label: '  Blankets',
                                        },
                                        {
                                            key: '5',
                                            label: '   Floor Coverings ',
                                        },
                                        {
                                            key: '6',
                                            label: '   Kitchen & Table Linen',
                                        },
                                        {
                                            key: '7',
                                            label: '   Bath Towels',
                                        },
                                        ],
                                        selectable: true,
                                        defaultSelectedKeys: ['7'],
                                    }}
                                >
                                    <Typography.Link>
                                        <Space style={{ color: 'black', fontWeight: 'bold' }}>
                                            Home & Funitures
                                            <DownOutlined />
                                        </Space>
                                    </Typography.Link>
                                </Dropdown>
                            </span>

                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                Sports & Books
                            </span>
                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                Flights
                            </span>
                            <span style={{ color: 'black', fontWeight: 'bold' }}>
                                Offers Zone
                            </span>
                        </div>
                    </Col>
                </Row>
            </Header> */}
            <Divider style={{ border: '5px solid  #e0e0eb', margin: "auto" }} />
        </div>
    )
}
export default HeaderFlie;
