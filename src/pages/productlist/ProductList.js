
import { Layout, Space, Col, Card, Row, Typography, Menu, Checkbox, Progress, Divider, Tag, Button, Tabs, Pagination } from 'antd';
import { useState, useEffect } from 'react';
import {
    CloseOutlined,
} from '@ant-design/icons';
import { setProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
    getItem(<Tag ><CloseOutlined />
        Plus (FAssured)
    </Tag>),
    getItem(<Divider />),
    getItem(<Divider orientation="left">Gender</Divider>, 'sub1', null, [
        getItem('Men', '1', <Checkbox />),
        getItem('Women', '2', <Checkbox />),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">category</Divider>, 'sub2', null, [
        getItem('Best Of Electronics', '3', <  Checkbox checked />),
        getItem('Beauty Food & More', '4', <Checkbox />),
        getItem('Grooming ,Books & More', '5', <Checkbox />),
        getItem('Home & Kitchen ', '6', <Checkbox />),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">Size</Divider>, 'sub3', null, [
        getItem('S', '7', <Checkbox />),
        getItem('XL', '8', <Checkbox />),
        getItem('XXL', '9', <Checkbox />),
        getItem('XL ', '10', <Checkbox />),
        getItem('S %  ', '11', <Checkbox />),
        getItem(<Button type="link">2345 More</Button>, '12'),
    ]),
    getItem(<Divider />),
    getItem(<Divider orientation="left">Price</Divider>, 'sub4', null, [
        getItem('search brand ', '12', <Progress percent={90} status="active" />),
        getItem(<Space style={{}}>
            <select name="Min" id="Price">
                <option value="Min">Min</option>
                <option value="699">699+</option>
                <option value="1500">1500+</option>
                <option value="2500">2500+</option>
                <option value="3000">3000+</option>
                <option value="4500">4500+</option>
            </select> to
            <select name="5000+" id="Price">
                <option value="5000">5000+</option>
                <option value="699">699+</option>
                <option value="1500">1500+</option>
                <option value="2500">2500+</option>
                <option value="3000">3000+</option>
                <option value="4500">4500+</option>
            </select>
        </Space>, '52')
    ]),
];

const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
        return <a>Previous</a>;
    }
    if (type === 'next') {
        return <a>Next</a>;
    }
    return originalElement;
};

function ProductList() {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    // console.log("XXXXXXX", products);
    const [first, setFirst] = useState([])
    const [currentAction, setCurrentAction] = useState(0);
    const [value, setValue] = useState([])
    const [price, setPrice] = useState([])
    const [clothe, setClothe] = useState([])
    const [page, setPage] = useState(1)
    const [productPerPage, setProductPerPage] = useState(4)


    async function GetData() {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`);
            const data = await response.json();
            // Dispatch the action after data is fetched
            dispatch(setProducts(data));
            setFirst(data);
            setPrice(data);
            setClothe(data);
            setValue(data)
            // console.log('******', data)
            // console.log('price', price)
            // console.log('clothe', clothe)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    // console.log("@@@@@@@@original", first)
    useEffect(() => {
        GetData();
    }, [])

    const indexOfLastPage = page + productPerPage;
    const indexOfFirstPage = indexOfLastPage - productPerPage;
    const products1 = first.slice(indexOfFirstPage, indexOfLastPage)
    // console.log('PAGINATION', products1)

    const handleChange1 = (e) => {
        console.log("******data1", e)
        const data1 = value.filter((a) => a.category === e)
        console.log("1010", data1)
        setFirst(data1)
    }
    const handleChange2 = (e) => {
        console.log("******data2", e)
        const data2 = price.filter((a) => a.category === e)
        console.log("1012", data2)
        setFirst(data2)
    }
    const handleChange3 = (e) => {
        console.log("******data3", e)
        const data3 = clothe.filter((a) => a.category === e)
        console.log("1013", data3)
        setFirst(data3)
    }

    const actions = [
        () => handleChange2("men's clothing"),
        () => handleChange3("women's clothing"),
        () => handleChange1("jewelery"),
    ];

    const handleClick = () => {
        if (currentAction < actions.length) {
            actions[currentAction]();
            setCurrentAction(currentAction + 1);
        }
    };

    // console.log("PRODUCTS: ", products);

    // const FillterhandleChange = (curr) => {
    //     console.log("******&&&&&&&&", curr)
    //     const data = first.filter(res => res.category === curr)
    //     console.log("OOOOO menS clothe", data)
    //     // setMenclothe(data)
    //     setFirst(data)
    //     console.log("@@@@@@@@@filtered", data)

    // }

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
                            <Sider style={siderStyle} width={270}
                            >
                                <Menu
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    theme="light"
                                    items={items}
                                    onClick={handleClick}
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
                                            // {
                                            //     label: (
                                            //         <span value="men's clothing" onClick={() => FillterhandleChange("men's clothing")}>
                                            //             Sortby
                                            //         </span>
                                            //     ),
                                            //     key: '1',

                                            // },
                                            {
                                                label: (
                                                    <span >
                                                        New Arrivals
                                                    </span>
                                                ),
                                                key: '2',
                                            },
                                            {
                                                label: (
                                                    <span >
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
                                                    <span >
                                                        BestSeller
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
                                {products1.map((product) => (
                                    <>
                                        <Col className="gutter-row" span={8} key={product.id}>
                                            <div>{product.price}</div>
                                            <Link to={`/product/${product.id}`}>
                                                <div style={style}><Card 
                                                    hoverable
                                                    cover={<img src={product.image} alt="avatar" style={{ height: '100px' }} />}>
                                                    <Space direction="vertical">
                                                        {/* <Text type="danger"><div>{product.id}</div></Text> */}
                                                        {/* <Text strong type="secondary"><div>{product.title}</div></Text> */}
                                                        <Text strong><div>{product.category}</div></Text>
                                                        {/* <Text type="warning"><div>Hot Deal</div></Text> */}
                                                        <div><Text strong><div>{product.price}</div></Text><Text delete type="secondary">1,999</Text><Text type="success">55% off</Text></div>
                                                        <div><Text strong type="secondary">Size:</Text> <Text strong > S, M, XL, XXL</Text></div>
                                                    </Space>
                                                </Card>
                                                </div>
                                            </Link>
                                        </Col>
                                    </>
                                ))}
                            </Row>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            <div style={{ marginLeft: '33rem' }}><Pagination
                pageSize={productPerPage}
                total={20}
                onChange={(value) => setPage(value)}
                current={page}
                itemRender={itemRender}
            /></div>
        </Space>
    )
}
export default ProductList;

