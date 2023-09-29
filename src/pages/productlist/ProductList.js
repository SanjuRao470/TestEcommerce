
import { Layout, Space, Col, Card, Row, Typography, Menu, Checkbox, Progress, Divider, Tag, Button, Tabs, Pagination } from 'antd';
import { useState, useEffect } from 'react';

import Photo1 from '../../assets/images/c1.webp'
import Photo2 from '../../assets/images/c2.webp'
import {
    UpOutlined,
    CloseOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Sider, Content } = Layout;
const { Text } = Typography;

const contentStyle = {
    textAlign: 'left',
    // minHeight: 120,
    // lineHeight: '120px',
    color: '#fff',
    backgroundColor: '	#ffffff',
};

const siderStyle = {
    textAlign: 'left',
    lineHeight: '120px',
    width: '400px',
    color: '#fff',
    backgroundColor: ' #ffffff',
    marginRight: '10px',
    marginLeft: '10px'
};
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem(<h2>Filters</h2>),
    getItem(<Tag >  <CloseOutlined />
        Plus (FAssured)
    </Tag>),
    getItem(<Divider />),
    getItem(<h2>Categories</h2>),
    {
        label: 'Clothing and Accessories', icon: <UpOutlined />,
        key: 'app',
        disabled: true,
    },
    getItem(<Divider orientation="left">Buttomwear</Divider>, 'sub2', null, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">Gender</Divider>, 'sub3', null, [
        getItem('Men', '17', <Checkbox />),
        getItem('Women', '18', <Checkbox />),
        getItem('Option 19', '19', <Checkbox />),
        getItem('Option 20', '20', <Checkbox />),
        getItem('Option 21', '21', <Checkbox />),
        getItem('Option 22', '22', <Checkbox />),
        getItem('Option 23', '23', <Checkbox />),
        getItem('Option 24', '24', <Checkbox />),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">DISCOUNT</Divider>, 'sub4', null, [
        getItem('20 %  or More 25', '25', <Checkbox />),
        getItem('30 %  or More 26', '26', <Checkbox />),
        getItem('40 %  or More 27', '27', <Checkbox />),
        getItem('60 %  or More 28', '28', <Checkbox />),
        getItem('70 %  or More 29', '29', <Checkbox />),
        getItem('80 %  or More 30', '30', <Checkbox />),
        getItem('50 %  or More 31', '31', <Checkbox />),
        getItem('20 %  or More 32', '32', <Checkbox />),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">BRAND</Divider>, 'sub5', null, [
        getItem('search brand ', '33', <SearchOutlined />),
        getItem('30 %  or More 26', '34', <Checkbox />),
        getItem('40 %  or More 27', '35', <Checkbox />),
        getItem('60 %  or More 28', '36', <Checkbox />),
        getItem('70 %  or More 29', '37', <Checkbox />),
        getItem('80 %  or More 30', '38', <Checkbox />),
        getItem('50 %  or More 31', '39', <Checkbox />),
        getItem('20 %  or More 32', '40', <Checkbox />),
        getItem(<Button type="link">2573 More</Button>, '41'),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">CUSTOMER RATINGS</Divider>, 'sub6', null, [
        getItem('4 & above', '42', <Checkbox />),
        getItem('5 & above', '43', <Checkbox />),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">SIZE</Divider>, 'sub7', null, [
        getItem('search brand ', '44', <SearchOutlined />),
        getItem('S', '45', <Checkbox />),
        getItem('XL', '46', <Checkbox />),
        getItem('XXL', '47', <Checkbox />),
        getItem('XL ', '48', <Checkbox />),
        getItem('S %  ', '49', <Checkbox />),
        getItem(<Button type="link">2345 More</Button>, '50'),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">PRICE</Divider>, 'sub8', null, [
        getItem('search brand ', '51', <Progress percent={90} status="active" />),
        getItem(<Space style={{}}>
            <select name="cars" id="cars">
                <option value="volvo">Min</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select> to
            <select name="cars" id="cars">
                <option value="volvo">3000+</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </Space>, '52'),
        getItem('XL', '53', <Checkbox />),
        getItem('XXL', '54', <Checkbox />),
        getItem('XL ', '55', <Checkbox />),
        getItem('S %  ', '56', <Checkbox />),
        getItem(<Button type="link">2573 More</Button>, '57'),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">COLOR</Divider>, 'sub9', null, [
        getItem('pink', '58', <Checkbox />),
        getItem('red', '59', <Checkbox />),
        getItem('yellow', '60', <Checkbox />),
        getItem('green ', '61', <Checkbox />),
        getItem('blue  ', '62', <Checkbox />),
        getItem(<Button type="link">23 More</Button>, '63'),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">FIT</Divider>, 'sub10', null, [
        getItem('Regular fit', '64', <Checkbox />),
        getItem('fit', '65', <Checkbox />),
        getItem('wide leg', '66', <Checkbox />),
        getItem('foot-leg ', '67', <Checkbox />),
        getItem('super skinny  ', '68', <Checkbox />),
        getItem(<Button type="link">10 More</Button>, '69'),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">OFFERS</Divider>, 'sub11', null, [
        getItem('Buy More,Save More', '70', <Checkbox />),
        getItem(' NO Cost EMI', '71', <Checkbox />),
        getItem('Super Price', '72', <Checkbox />),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">FABRIC</Divider>, 'sub12', null, [
        getItem('search fabric ', '73', <SearchOutlined />),
        getItem('94% polyster & 5% lycra', '74', <Checkbox />),
        getItem('cotton hoisry', '75', <Checkbox />),
        getItem('demim', '76', <Checkbox />),
        getItem('denim lycra', '77', <Checkbox />),
        getItem('chiffon Blend ', '78', <Checkbox />),
        getItem(<Button type="link">75 More</Button>, '79'),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">AVAILBILITY</Divider>, 'sub13', null, [
        getItem('Incude out of stock', '80', <Checkbox />),
    ]),
];

 
    function ProductList() {

    // const [collapsed, setCollapsed] = useState(false);
    const [first, setFirst] = useState([])
    // const [data, setData] = useState([])

    async function GetData() {
        try {

            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'GET',
                headers: {
                    'Origin': 'http://localhost:3000',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer your_token_here'
                },
            })
            const result = await response.json();
            console.log(result.response)
            setFirst(result)

        } catch (err) {
            console.log("catched errors")
        }
    }
    console.log("@@@@@@@@original", first)


    useEffect(() => {
        GetData();
    }, [])

    const FillterhandleChange = (curr) => {
        console.log("******&&&&&&&&", curr)
        const data = first.filter(res => res.category === curr)
        console.log("OOOOO menS clothe", data)
        // setMenclothe(data)
        setFirst(data)
        console.log("@@@@@@@@@filtered", data)

    }
    const Fillterhandle = (e) => {
        console.log("******&&&&&&&&", e)
        const data1 = first.filter((a) => a.category === e)
        console.log("$$$$$$$1234 Women clothe", data1)
        setFirst(data1)
    }
    const FillterPopularity = (e) => {
        console.log("******&&&&&&&&", e)
        const data2 = first.filter((res) => res.category === e)
        console.log("$$$$$$$ jewelary", data2)
        setFirst(data2)
    }
    const FillterNewest = (e) => {
        console.log("******&&&&&&&&", e)
        const data3 = first.filter((res) => res.category === e)
        console.log("$$$$$$$ electronics", data3)
        setFirst(data3)
    }
    const SortPrice = () => {
        const pricedata = first.sort((a, b) => (b.price > a.price ? 1 : -1))
        console.log('!!!@@@ high to low', pricedata)
        setFirst(pricedata)
        console.log('sortingdata', first)
    }
    const style = {
        background: ' #ffffff',
        padding: '8px 0',
    };


    // const handlePageChange = (page) => {
    //     onChange(page);
    //   };
    //   const total = 20;

    return (
        
        <Space
            direction="vertical"
            style={{
                minheight: '100%',
                // position: 'fixed',
                overflowY: 'scroll',
                overflowX: 'hidden',
                top: 0,
                bottom: 0,
                width: '100%',
            }}
            size={[0, 48]}
        >
            <Layout  >
                <Layout style={{ marginTop: '6%' }} >
                    <Row>
                        <Col span={24}>
                            {/* <Sider style={siderStyle} width={180} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} */}
                            <Sider style={siderStyle} width={180}
                            >
                                <Menu
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    theme="light"
                                    items={items}
                                />
                            </Sider>
                        </Col>
                    </Row>
                    <Layout style={{ marginTop: '0%' }}>
                        <Row>
                            <Col span={24}>
                                <div style={{ backgroundColor: 'white', padding: '10px' }}><div style={{ color: '#1a1a1a', fontSize: "15px", fontWeight: 'bold' }}>Showing 1 – 40 of 15,061 results for "kurtas kurtis"</div>
                                    <Tabs
                                        defaultActiveKey="1"
                                        items={[
                                            {
                                                label: (
                                                    <span value="men's clothing" onClick={() => FillterhandleChange("men's clothing")}>
                                                        Sortby
                                                    </span>
                                                ),
                                                key: '1',

                                            },
                                            {
                                                label: (
                                                    <span value="women's clothing" onClick={() => Fillterhandle("women's clothing")}>
                                                        Relevance
                                                    </span>
                                                ),
                                                key: '2',
                                            },
                                            {
                                                label: (
                                                    <span value="jewelery" onClick={() => FillterPopularity("jewelery")}>
                                                        papularity
                                                    </span>
                                                ),
                                                key: '3',
                                            },
                                            {
                                                label: (
                                                    <span value="jewelery" onClick={() => FillterPopularity("jewelery")} >
                                                        Price--Low to High
                                                    </span>
                                                ),
                                                key: '4',
                                            },
                                            {
                                                label: (
                                                    <span onClick={() => SortPrice("price")}>
                                                        Price--High to Low
                                                    </span>
                                                ),
                                                key: '5',
                                            },
                                            {
                                                label: (
                                                    <span value="electronics" onClick={() => FillterNewest("electronics")}>
                                                        Newest First
                                                    </span>
                                                ),
                                                key: '6',
                                            },
                                        ]}
                                    />
                                </div>
                            </Col>
                        </Row>
                        < Content style={contentStyle} >
                            <Row gutter={[16, 16]}>

                                {first.map((user) => (
                                    <>
                                        <Col className="gutter-row" span={6}>
                                            <div>{user.price}</div>
                                            <Link to="/productdetail">
                                                <div style={style}><Card style={{ height: '100%' }}
                                                    hoverable
                                                    cover={<img src={Photo1} alt="avatar" />}>
                                                    <Space direction="vertical">
                                                        <Text type="danger"><div>{user.id}</div></Text>
                                                        <Text strong type="secondary"><div>{user.title}</div></Text>
                                                        <Text strong><div>{user.category}</div></Text>
                                                        <Text type="warning"><div>Hot Deal</div></Text>
                                                        <div><Text strong><div>{user.price}</div></Text><Text delete type="secondary">1,999</Text><Text type="success">55% off</Text></div>
                                                        <div><Text strong type="secondary">Size:</Text> <Text strong > S, M, XL, XXL</Text></div>
                                                    </Space>
                                                </Card>
                                                </div>
                                            </Link>
                                        </Col>

                                        {/* <Col className="gutter-row" span={6}>
                                            <div style={style}><Card style={{ height: '100%' }}
                                                hoverable
                                                cover={<img src={Photo2} alt="avatar" />}>
                                                <Space direction="vertical">
                                                    <Text type="danger"><div>{user.id}</div></Text>
                                                    <Text strong type="secondary"><div>{user.title}</div></Text>
                                                    <Text strong><div> {user.category}</div></Text>
                                                    <Text type="warning"><div>Hot Deal</div></Text>
                                                    <div><Text strong><div>{user.price}</div></Text><Text delete type="secondary">2,320</Text><Text type="success">65% off</Text></div>
                                                    <div><Text strong type="secondary">Size:</Text><Text strong > S, M, XL, XXL</Text></div>
                                                </Space>
                                            </Card></div>
                                        </Col> */}
                                        {/* <Col className="gutter-row" span={6}>
                                            <div style={style}><Card style={{ height: '100%' }}
                                                hoverable
                                                cover={<img src={Photo2} alt="avatar" />}>
                                                <Space direction="vertical">
                                                    <Text type="danger"><div>{user.id}</div></Text>
                                                    <Text strong type="secondary"><div>{user.title}</div></Text>
                                                    <Text strong><div> {user.category}</div></Text>
                                                    <Text type="warning"><div>Hot Deal</div></Text>
                                                    <div><Text strong><div>{user.price}</div></Text> <Text delete type="secondary">1,520</Text><Text type="success">85% off</Text></div>
                                                    <div><Text strong type="secondary">Size:</Text> <Text strong > S, M, XL, XXL</Text></div>
                                                </Space>
                                            </Card></div>
                                        </Col>
                                        <Col className="gutter-row" span={6}>
                                            <div style={style}><Card style={{ height: '100%' }}
                                                hoverable
                                                cover={<img src={Photo1} alt="avatar" />}>
                                                <Space direction="vertical">
                                                    <Text type="danger"><div>{user.id}</div></Text>
                                                    <Text strong type="secondary"><div>{user.title}</div></Text>
                                                    <Text strong><div> {user.category}</div></Text>
                                                    <Text type="warning"><div>Hot Deal</div></Text>
                                                    <div><Text strong><div>{user.price}</div></Text> <Text delete type="secondary">2,150</Text><Text type="success">75% off</Text></div>
                                                    <div><Text strong type="secondary">Size:</Text> <Text strong > S, M, XL, XXL</Text></div>
                                                </Space>
                                            </Card></div>
                                        </Col> */}
                                    </>
                                ))}
                            </Row>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            {/* <Pagination onChange={onChange} total={20} /> */}
            {/* <Pagination
        onChange={handlePageChange}
        total={total}
        defaultPageSize={4} 
        showSizeChanger={false} 
      /> */}
            
        </Space>

    )
}
export default ProductList;

